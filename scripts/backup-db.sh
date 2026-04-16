#!/bin/bash
# scripts/backup-db.sh
# PostgreSQL Daily Backup Script with 14-day rolling retention

# Load environment variables
source .env

# Configuration
BACKUP_DIR="./backups"
DB_URL=$DATABASE_URL
TIMESTAMP=\$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="\$BACKUP_DIR/db_backup_\$TIMESTAMP.sql.gz"
RETENTION_DAYS=14

# Ensure backup directory exists
mkdir -p \$BACKUP_DIR

echo "Starting database backup..."

# Extract connection details or just use pg_dump with the URL (if valid for pg_dump)
if pg_dump "\$DB_URL" | gzip > "\$BACKUP_FILE"; then
    echo "Backup completed successfully: \$BACKUP_FILE"
    
    # Optional: Upload to S3 (commented out until AWS CLI configured)
    # aws s3 cp "\$BACKUP_FILE" s3://my-backup-bucket/db-backups/
    
    # Delete backups older than 14 days
    echo "Cleaning up backups older than \$RETENTION_DAYS days..."
    find \$BACKUP_DIR -type f -name "db_backup_*.sql.gz" -mtime +\$RETENTION_DAYS -exec rm {} \;
    echo "Cleanup complete."
else
    echo "Backup failed!" >&2
    exit 1
fi
