#!/bin/bash

# Create a temporary directory for building
rm -rf build
mkdir -p build

# Copy source files
cp index.js package.json build/

# Navigate to build directory
cd build

# Install production dependencies
npm install --production

# Rename index.js to index.mjs for ES modules
mv index.js index.mjs

# Create ZIP file
zip -r ../function.zip . 