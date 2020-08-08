#!/bin/bash

# Ensure we don't push in-progress files
git stash
git checkout master

# Cleanup and build
rm -rf .next build
yarn build:production

# Upload build
echo ""
echo "Uploading build..."
rsync -r build/ math:public_html
ssh math "chmod -R u+rwX,go+rX,go-w public_html"

echo "Done"