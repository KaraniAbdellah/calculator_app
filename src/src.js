// install node js & npm
/*
    node js: go to the browser
    npm: goes comes with node js

    to install packages:
        npm init
        npm install package_name
*/


// NodeJs & npm & require
/*
    require:
        always return a function
        It loads and uses code from other files or packages.

    Node: 
        allow you tu run javascript outside
        the web browser (in the terminal)

    npm:
        NPM (Node Package Manager), used to install, manage, 
        and share JavaScript libraries and packages.
        like github: contain a lot of package
        npm: contain a lot of packages like "prompt-sync"

        problem: in install any package use -g
        -g: make ths modulo used in all folders in project

        Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
            change the PowerShell policy to run any script
        PowerShell: blocks some scripts to protect the computer

    package a lot of modulo and modulo contain a lot of libraries

    "in js you can store function in variable & use variable as function"
*/


// Export a Class in NodeJs
/*
    in app.js
        const Calculator = require("./Calculator");
        Calculator.Menu();
    
    module.exports = Calculator;
        is a module in node js that allow you to export data,
        classes, functions, you can use it in another using require()
    
    const Calculator = require("./Calculator");
        require Calculator class
*/


// try & catch
/*
    The try block execute first
    if execution paused --> catch execute  
    "you can catch division by zero --> will be return infinity"

    Always use a try-catch block when working with 
    potentially error-prone code, such as:
    - Network requests
    - JSON parsing
    - Database operations
*/
try {
    console.log(`the result is ${operation}`);
} catch (error) {
    console.error("Error: ", error.message);
}
