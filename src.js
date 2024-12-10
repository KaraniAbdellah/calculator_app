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
    input: stdin,
    output: stdout
});
  
/*
    - require() 
        is a built-in function that exit in node-js 
        & it can imports modules

    - readlines
        - is built-in modulo that provide
            functionallity to deal with console
        - it is take to object (input, output)
    
    - Modulo
        is like file that contain a lot of function    

    - createInterface()
        - creates a readline interface in Node.js
        - it return an object
    
    - input: stdin output: stdout, 
        two objects one for handle the user input & other for output user
        the two object accept two proprities

    - Summary
        readline.createInterface() creates a communication channel
            between your program and the terminal.
        input: stdin uses the standard input stream
        output: stdout uses the standard output stream

*/


