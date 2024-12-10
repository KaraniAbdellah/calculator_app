
function Addition(a, b) {
    return a + b;
}

function Soustraction(a, b) {
    return a - b;
}

function Multiplication(a, b) {
    return a * b;
}

function Division(a, b) {
    if (b != 0) {
        console.log("Division par zero!!!");
    } else return a / b;
}

function Puissance(a, b) {
    return a ** b;
}

function Racine_carree(a) {
    return Math.sqrt(a);
}

function Factorielle(n) {
    if (n < 0) {
      return 'La factorielle n\'est pas \
        définie pour les nombres négatifs.';
    }
    let resultat = 1;
    for (let i = 1; i <= n; i++) {
      resultat *= i;
    }
    return resultat;
}


// Import readlines modulo
const readlineInterface = require("readline");
// create a communication between terminal use createInterface
const r1 = readlineInterface.createInterface({
    input: stdin,
    output: stdout
});





