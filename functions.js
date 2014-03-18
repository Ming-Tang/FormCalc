/* functions.js
 * Math functions
 */

// Function definitions.
var Functions = { };

Object.getOwnPropertyNames(Math).forEach(function(key) {
  var c0 = key.charAt(0);
  if (c0.toLowerCase() === c0)
    Functions[key] = Math[key];
});

Functions.log = function(x, y) {
  return arguments.length == 2
         ? Math.log(y) / Math.log(x)
         : Math.log(x) / Math.LN10;
};

Functions.ln = function(x) { return Math.log(x); };
Functions.lg = function(x) { return Math.log(x) / Math.LN2; };

Functions.cbrt = function(x) { return Math.pow(x, 1 / 3); };

// Short function definitions.
var ShortFunctions = "sin cos tan asin acos atan log ln lg abs sqrt cbrt".split(" ");

// #if !MAIN
// This part is for the build pipeline.

exports.getShortFunctionTokens = function() {
  return "  " + ShortFunctions.map(function(x) {
    return "'" + x + "'";
  }).join('\n  ') + ";";
};

exports.getShortFunctionEvaluations = function() {
  return ShortFunctions.map(function(x) {
    return "|  '" + x + "' e &'*' [* %% = Functions['" + x + "'](%2); *]";
  }).join('\n') + "\n";
};

// #endif
