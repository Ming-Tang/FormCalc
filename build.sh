#!/bin/bash

# Install: npm install jscc-node
#          npm install preprocessor

NODE=node
JSCC_NODE_PATH=./node_modules/jscc-node/
PREPROCESS=./node_modules/.bin/preprocess

DRIVER=driver.js_
PARSER_INPUT=math.par
PARSER_OUTPUT=math_parser.js

MAIN_JS=main.js
USERSCRIPT_OUTPUT=FormCalc.user.js

$NODE $JSCC_NODE_PATH/jscc.js -t $DRIVER -o $PARSER_OUTPUT $PARSER_INPUT

$PREPROCESS $MAIN_JS > $USERSCRIPT_OUTPUT
