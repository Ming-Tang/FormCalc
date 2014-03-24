#!/bin/bash

# Install: npm install jscc-node
#          npm install preprocessor

NODE=node
JSCC_NODE_PATH=./node_modules/jscc-node/
PREPROCESS=./node_modules/.bin/preprocess

DRIVER=driver.js_
PARSER_INPUT=math.par
PARSER_PREPROCESSED=math.preprocessed.par
PARSER_OUTPUT=math_parser.js

MAIN_JS=main.js
USERSCRIPT_OUTPUT=FormCalc.user.js

# preprocess parser
$PREPROCESS $PARSER_INPUT > $PARSER_PREPROCESSED
# workaround for the percent signs removed by preprocessor (% -> %%)
sed -i.bak "s/%\\s*=/%% =/g" $PARSER_PREPROCESSED

$NODE $JSCC_NODE_PATH/jscc.js -t $DRIVER -o $PARSER_OUTPUT $PARSER_PREPROCESSED

$PREPROCESS $MAIN_JS > $USERSCRIPT_OUTPUT

rm $PARSER_PREPROCESSED
rm *.bak
