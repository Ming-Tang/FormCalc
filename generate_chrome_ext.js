var fs = require('fs-extra');
var path = require('path');

var dev = (process.argv.length >= 3 && process.argv[2] == "dev");

var extensionPath = "chrome_extension" + (dev ? "_dev" : "");

var userScript = dev ? "FormCalc.dev.user.js" : "FormCalc.user.js";

var header = (function() {
  var header = { };

  var userscript = fs.readFileSync("userscript_header.js").toString();
  var lines = userscript.split("\n");

  lines.forEach(function(line) {
    var match = line.match(/@(\w+)\s*(.+)\s*$/);
    if (match != null) header[match[1]] = match[2];
  });

  return header;
})();

console.log(header);

// See http://developer.chrome.com/extensions/manifest
var manifest = {
  // Required
  "manifest_version": 2,
  "name": header.name,
  "version": header.version,

  // Recommended
  //"default_locale": "en",
  "description": header.description,
  //"icons": {...},

  // Pick one (or none)
  //"browser_action": {...},
  //"page_action": {...},

  // Optional
  "author": "Ming",
  //"background": {
    // Recommended
  //  "persistent": false
  //},

  //"background_page": ""

  "content_scripts": [
    {
      "matches": [ "http://*/*", "https://*/*" ],
      //"css": [ ],
      "js": [ userScript ]
    }
  ],
};

function ep(p) {
  return path.join(extensionPath, p);
}

// clear extension path
fs.removeSync(extensionPath);
fs.mkdirSync(extensionPath);

// write manifest.json
fs.writeFileSync(ep("manifest.json"), JSON.stringify(manifest));

// copy userscript
fs.copySync(userScript, ep(userScript));

console.log(manifest);
