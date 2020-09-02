#!/bin/bash

SSH_TARGET="$USER@$HOST"

rsync -r --delete build/ $SSH_TARGET:public_html/
ssh $SSH_TARGET "chmod -R u+rwX,go+rX,go-w public_html"

echo "Done!"