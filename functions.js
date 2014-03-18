
var Functions = { };
Object.getOwnPropertyNames(Math).forEach(function(key) { Functions[key] = Math[key]; });

Functions.log = function(x, y) {
  return arguments.length == 2
         ? Math.log(y) / Math.log(x)
         : Math.log(x) / Math.LN10;
};

Functions.ln = function(x) { return Math.log(x); };
Functions.lg = function(x) { return Math.log(x) / Math.LN2; };
