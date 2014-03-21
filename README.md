FormCalc
========

Evaluate a text selection as math expression.

Installation
------------

To download, view `FormCalc.user.js`, then download it by clicking [Raw](https://github.com/Ming-Tang/FormCalc/raw/master/FormCalc.user.js).

This is a user script. If you are using Firefox, you can install it through Greasemonkey. If you are using Chrome, see this [StackOverflow post][1] for instructions on how to install user scripts. In summary, open `chrome://extensions` and drag the downloaded file into that tab to manually install it.


  [1]: http://stackoverflow.com/questions/5258989/manually-adding-a-userscript-to-google-chrome

Usage
-----

Focus on any input or textarea and press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> to evaluate. You can evaluate a selection.
If you want to evaluate without overwriting the text field (to repeat an assignment expression), use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>S</kbd>.

Syntax
------

    2 + 2         => 4 
    100 + 2 6     => 112
    log(100)      => 2
    
    Variable assignment
    x = 3         => 3
    50(x+2)       => 250

How to Build
============
Install [jscc-node](https://github.com/badlee/JSCC-NODE).

    npm install jscc-node

Then, run `build.sh`.
