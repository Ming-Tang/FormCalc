BIN=./node_modules/.bin
PREPROCESS=$(BIN)/preprocess
MINIFY_USERSCRIPT=./minify_userscript.js
JSCC=./node_modules/jscc-node/jscc.js
DRIVER=./driver.js_

.PHONY: userscript_dev userscript_min all clean

math.preprocessed.par: math.par
	$(PREPROCESS) math.par > math.preprocessed.par
	sed -i .bak 's/%[[:space:]]*=/%% =/g' math.preprocessed.par

math_parser.js: math.preprocessed.par
	node $(JSCC) -t $(DRIVER) -o math_parser.js math.preprocessed.par

FormCalc.dev.user.js: math_parser.js main.js jquery.js functions.js userscript_header.js
	$(PREPROCESS) main.js > FormCalc.dev.user.js

FormCalc.user.js: FormCalc.dev.user.js
	node $(MINIFY_USERSCRIPT) FormCalc.dev.user.js FormCalc.user.js userscript_header.js

userscript_dev: FormCalc.dev.user.js
userscript_min: FormCalc.user.js

all: userscript_dev userscript_min

clean:
	rm -f math.preprocessed.par math_parser.js FormCalc.*.js *.bak
