#!/bin/bash

# ============================================
# Chhattisgarh Shaadi - Database Seeding Script
# For VPS (Ubuntu 22.04+)
# ============================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}============================================${NC}"
echo -e "${BLUE}  Chhattisgarh Shaadi Database Seeder${NC}"
echo -e "${BLUE}============================================${NC}"

# Configuration
APP_DIR="/var/www/chhattisgarhshadi-backend"

# Check if the directory exists
if [ ! -d "$APP_DIR" ]; then
    echo -e "${RED}Error: Backend directory not found at $APP_DIR${NC}"
    echo -e "${YELLOW}Please make sure the backend is deployed first.${NC}"
    exit 1
fi

cd "$APP_DIR"

echo -e "\n${YELLOW}Running Prisma Database Seed...${NC}"

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo -e "${RED}Error: .env file not found in $APP_DIR${NC}"
    echo -e "${YELLOW}Please ensure your database credentials are configured.${NC}"
    exit 1
fi

# Run the seed command using npm or npx
echo "Executing seed script..."
if npx prisma db seed; then
    echo -e "\n${GREEN}============================================${NC}"
    echo -e "${GREEN}  ✅ Database Seeding Completed Successfully!${NC}"
    echo -e "${GREEN}============================================${NC}"
else
    echo -e "\n${RED}============================================${NC}"
    echo -e "${RED}  ❌ Database Seeding Failed!${NC}"
    echo -e "${RED}  Check the error logs above for more details.${NC}"
    echo -e "${RED}============================================${NC}"
    exit 1
fi
