#!/bin/bash

rm -rf .next build
yarn build:production
rsync -r build/ math:public_html
ssh math "chmod -R u+rwX,go+rX,go-w public_html"