#!/bin/bash

# ============================================
# Quick Redeploy Script (After Code Changes)
# Run this after pulling new code from git
# ============================================

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

APP_DIR="/var/www/chhattisgarhshadi-backend"

echo -e "${BLUE}=== Quick Redeploy ===${NC}"

cd $APP_DIR

# 1. Pull latest changes
echo -e "${YELLOW}Force syncing with GitHub...${NC}"
git fetch --all
git reset --hard origin/main

# 2. Install dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
# Use --include=dev if needed, but dotenv is now in main deps
npm install

# 3. Regenerate Prisma client
echo -e "${YELLOW}Regenerating Prisma client...${NC}"
npx prisma generate

# 4. Run migrations
echo -e "${YELLOW}Running database migrations...${NC}"
npx prisma migrate deploy

# 5. Restart application
echo -e "${YELLOW}Restarting application...${NC}"
# Use restart instead of reload to clear "reload in progress" locks
pm2 restart shaadi-api || pm2 start server.js --name shaadi-api

echo -e "${GREEN}=== Redeploy Complete! ===${NC}"
echo -e "Check status: pm2 status"
echo -e "View logs: pm2 logs shaadi-api"
