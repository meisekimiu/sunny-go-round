#!/bin/bash
echo "Building and packaging sunny-go-round for mini-japan deployment..."
yarn build
mkdir -p dist
cp build/static/css/*.css dist/sunny-go-round.css
cp build/static/js/*.js dist/sunny-go-round.js
echo "Mini-Japan package made. See dist/ folder for fancy contents."
