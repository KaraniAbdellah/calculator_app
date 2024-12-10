// NodeJs & npm
/*
    Node: 
        allow you tu run javascript outside
        the web browser (in the terminal)

    npm:
        NPM (Node Package Manager) is a tool that comes
        with Node.js, used to install, manage, 
        and share JavaScript libraries and packages.
*/

// User Input
/*
    Option 1: readline
    Option 2: prompt-sync --> install with npm
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
  
/*
    - require() 
        is a built-in function that exit in node-js 
        & it can imports modules

    - readlines
        is modulo that provide
        functionallity to deal with console
    
    - createInterface()
        creates a readline interface in Node.js
    
    - input: process.stdin
        for reading from the file

    - output: process.stdout
        for wrtting the values for the terminal
*/


