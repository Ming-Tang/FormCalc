#!/bin/bash

NODE=node
JSCC_NODE_PATH=./node_modules/jscc-node/
PREPROCESS=./node_modules/.bin/preprocess

DRIVER=driver.js_
PARSER_INPUT=math.par
PARSER_PREPROCESSED=math.preprocessed.par
PARSER_OUTPUT=math_parser.js

MINIFY_USERSCRIPT=minify_userscript.js
GENERATE_CHROME_EXT=generate_chrome_ext.js

MAIN_JS=main.js
USERSCRIPT_DEV_OUTPUT=FormCalc.dev.user.js
USERSCRIPT_OUTPUT=FormCalc.user.js
USERSCRIPT_HEADER=userscript_header.js

# preprocess parser
$PREPROCESS $PARSER_INPUT > $PARSER_PREPROCESSED

# workaround for the percent signs removed by preprocessor (% -> %%)
sed -i.bak "s/%\\s*=/%% =/g" $PARSER_PREPROCESSED

# generate parser using js/cc
$NODE $JSCC_NODE_PATH/jscc.js -t $DRIVER -o $PARSER_OUTPUT $PARSER_PREPROCESSED

# glue JS files together into the userscript (dev, with identifiers)
$PREPROCESS $MAIN_JS > $USERSCRIPT_DEV_OUTPUT

# minify userscript, include header
$NODE $MINIFY_USERSCRIPT $USERSCRIPT_DEV_OUTPUT $USERSCRIPT_OUTPUT $USERSCRIPT_HEADER

# remove intermediate files
rm $PARSER_PREPROCESSED
rm *.bak

# generate Chrome extension, dev and minified
$NODE $GENERATE_CHROME_EXT dev
$NODE $GENERATE_CHROME_EXT
