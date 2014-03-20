// ==UserScript==
// @name           Form Calculator
// @description    Evaluate a text selection as math expression
// @include        *
// ==/UserScript==

(function() {

// #include "jquery.js"
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

$(document).bind('keyup', 'ctrl+shift+x', function(e) {
  if (e.ctrlKey && e.shiftKey && e.keyCode == 88) {
    var elem = document.activeElement;
    if (elem.selectionEnd - elem.selectionStart === 0) elem.select();

    var expr = elem.value.substring(elem.selectionStart, elem.selectionEnd);
    console.log("expr: ", expr);

    try {
      var result = parse(expr);
      console.log("result: ", result);
      elem.setRangeText(result);
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
});



})();
