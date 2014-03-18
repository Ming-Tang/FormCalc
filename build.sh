#!/bin/bash

NODE=node
JSCC_NODE_PATH=./node_modules/jscc-node/
DRIVER=$JSCC_NODE_PATH/driver.js_
PARSER_INPUT=math.par
PARSER_OUTPUT=math_parser.js

$NODE $JSCC_NODE_PATH/jscc.js -t $DRIVER -o $PARSER_OUTPUT $PARSER_INPUT
