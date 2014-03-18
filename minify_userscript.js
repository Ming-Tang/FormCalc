var cc = require('closure-compiler');
var fs = require('fs');

if (process.argv.length < 4) {
  console.error("Usage: " + process.argv[0] + " " +
                process.argv[1] + " INPUT_FILE OUTPUT_FILE HEADER_FILE");
  process.exit(1);
}

var input = process.argv[2], output = process.argv[3], header = process.argv[4];

var options = {

};

var data;
console.log("Closure has started. Please be patient.");
cc.compile(data = fs.readFileSync(input), options, function(err, cout, cerr) {
  if (err) throw err;

  fs.writeFileSync(output, fs.readFileSync(header) + "\n" + cout);
  console.log("Success.");
  console.log("Before compilation: " + data.length + " chars");
  console.log("After compilation:  " + cout.length + " chars");
});
