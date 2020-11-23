#!/bin/bash

SSH_TARGET="$USER@$HOST"

rsync -r --delete build/ $SSH_TARGET:public_html/ || { echo "Could not run rsync" && exit 1; }
ssh $SSH_TARGET "chmod -R u+rwX,go+rX,go-w public_html" || { echo "Could not make website public" && exit 1; }

echo "Done!"
exit 0
