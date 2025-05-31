#!/bin/bash
cd /home/kavia/workspace/code-generation/artventure-15034-cd4e49ff/artventure_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

