// #include "userscript_header.js"

(function() {

// #define var MAIN = true
// #include "jquery.js"
// #include "shortcut.js"
// #include "functions.js"

var Variables = { };

function getVariable(name) {
  if (Variables.hasOwnProperty(name)) {
    return Variables[name];
  } else {
    throw "Undefined variable: " + name;
  }
}

function setVariable(name, value) {
  return Variables[name] = value;
}

/**
 * Parse and evaluate an expression.
 */
function parse(input_string) {
  // #include "math_parser.js"
}

function doEvaluation(overwrite) {
  var elem = document.activeElement;
  if (elem.selectionEnd - elem.selectionStart === 0) elem.select();

  var expr = elem.value.substring(elem.selectionStart, elem.selectionEnd);
  console.log("expr: ", expr);

  try {
    var result = parse(expr);
    console.log("result: ", result);
    if (overwrite) elem.setRangeText(result);
  } catch (e) {
    if (typeof e === "string") {
      alert(e);
      console.log(e);
    } else if (e instanceof Array) {
      alert(e.join('\n'));
      console.log(e);
    }
  }
}

var opts = { 'disable_in_input': false };

shortcut.add('Ctrl+Shift+X', function() {
  doEvaluation(true);
}, opts);

shortcut.add('Ctrl+Shift+S', function() {
  doEvaluation(false);
}, opts);


})();
