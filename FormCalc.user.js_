// ==UserScript==
// @name           Form Calculator
// @description    Evaluate a text selection as math expression
// @include        *
// ==/UserScript==

(function() {

var MyMath = { };
Object.getOwnPropertyNames(Math).forEach(function(key) { MyMath[key] = Math[key]; });
MyMath.log = function(x, y) { return arguments.length == 2 ? Math.log(y) / Math.log(x) : Math.log(x) / Math.LN10; };
MyMath.ln = function(x) { return Math.log(x); };
MyMath.lg = function(x) { return Math.log(x) / Math.LN2; };

var Vars = { };

function eval1(x) {
  var mode = { type: "evaluate" };
  var mAssign = x.match(/^\s*([A-Za-z]*)\s*=\s*(.*)\s*$/);

  if (mAssign !== null) {
    mode = {
      type: "assign",
      variable: mAssign[1]
    };
    x = mAssign[2];
  }

  try {
    x = x.replace(/([a-zA-Z]+)/g, function(name) {
      if (name in MyMath)
        return " MyMath['" + name + "'] ";
      else if (name in Vars)
        return " Vars['" + name + "']";
      else
        throw x + " does not exist.";
    });
    x = x.replace(/(\d|\))\s*([a-zA-Z]|\()/, "$1*$2");
    x = x.replace(/(\d)\s+(\d)/, "$1*$2");

    console.log("eval: ", x);
    var result = eval(x);
    
    switch (mode.type) {
      case "evaluate":
        break;
      case "assign":
        Vars[mode.variable] = result;
        break;
      case "":
        break;
    }
    
    return result;
  } catch (e) {
    console.error("error: ", x);
    return e.toString();
  }
}

document.addEventListener("keyup", function(e) {
  if (e.ctrlKey && e.shiftKey && e.keyCode == 88) {
    var elem = document.activeElement;
    if (elem.selectionEnd - elem.selectionStart === 0) elem.select();
    var expr = elem.value.substring(elem.selectionStart, elem.selectionEnd);
    console.log("expr: ", expr);
    var result = eval1(expr);
    console.log("result: ", result);
    elem.setRangeText(result);
  }
}, false);

})();
