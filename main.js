// ==UserScript==
// @name           Form Calculator
// @description    Evaluate a text selection as math expression
// @include        *
// ==/UserScript==

(function() {

// #include "functions.js"

var Variables = { };

/**
 * Parse and evaluate an expression.
 */
function parse(input_string) {
  // #include "math_parser.js"
}



document.addEventListener("keyup", function(e) {
  if (e.ctrlKey && e.shiftKey && e.keyCode == 88) {
    var elem = document.activeElement;
    if (elem.selectionEnd - elem.selectionStart === 0) elem.select();

    var expr = elem.value.substring(elem.selectionStart, elem.selectionEnd);
    console.log("expr: ", expr);

    var result = parse(expr);
    console.log("result: ", result);
    elem.setRangeText(result);
  }
}, false);



})();
