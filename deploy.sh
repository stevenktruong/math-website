#!/bin/bash

rsync -r build $USER@$HOST:public_html
ssh math "chmod -R u+rwX,go+rX,go-w public_html"

echo "Done!"