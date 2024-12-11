const ps = require("prompt-sync"); // // import the prompt-sync module via npm
const prompt = ps(); // create prompt function

// Color Declaration
const reset = '\x1b[0m';
const red = '\x1b[31m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const blue = "\x1b[34m";


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
    if (b == 0) {
        console.log(red,"Division par zero!!!", reset);
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

function Menu() {
    console.log("1. Addition");
    console.log("2. Soustraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Puissance");
    console.log("6. Racine_carree");
    console.log("7. Factorielle");
    console.log("8. Quitter");
}



function Calculator() {
    Menu();
    let choix = prompt("Enterz Votre Choix: ");
    choix = Number(choix);
    switch(choix) {
        case 1: {
            let n1 = prompt("Enterz Premier nomber: ");
            let n2 = prompt("Enterz Deuxieme nomber: ");
            console.log(green, "------------------------------");
            console.log("Resultat = ", 
                String(Addition(Number(n1), Number(n2))));
            console.log("------------------------------", reset);
            break;
        }
        case 2: {
            let n1 = prompt("Enterz Premier nomber: ");
            let n2 = prompt("Enterz Deuxieme nomber: ");
            console.log(green,"------------------------------");
            console.log("Resultat = ", 
                String(Soustraction(Number(n1), Number(n2))));
            console.log("------------------------------", reset);
            break;
        }
        case 3: {
            let n1 = prompt("Enterz Premier nomber: ");
            let n2 = prompt("Enterz Deuxieme nomber: ");
            console.log(green, "------------------------------");
            console.log("Resultat = ", 
                String(Multiplication(Number(n1), Number(n2))));
            console.log("------------------------------", reset);
            break;
        }
        case 4: {
            let n1 = prompt("Enterz Premier nomber: ");
            let n2 = prompt("Enterz Deuxieme nomber: ");
            console.log(green, "------------------------------");
            console.log("Resultat = ", 
                String(Division(Number(n1), Number(n2))));
            console.log("------------------------------", reset);
            break;
        }
        case 5: {
            let n1 = prompt("Enterz la base : ");
            let n2 = prompt("Enterz l'exposant : ");
            console.log(green, "------------------------------");
            console.log("Resultat = ", 
                String(Puissance(Number(n1), Number(n2))));
            console.log("------------------------------", reset);
            break;
        }
        case 6: {
            let n1 = prompt("Enterz un nomber: ");
            console.log(green, "------------------------------");
            console.log("Resunltat = ", 
                String(Racine_carree(Number(n1))));
            console.log("------------------------------", reset);
            break;
        }
        case 7: {
            let n1 = prompt("Enterz un nomber: ");
            console.log(green, "------------------------------");
            console.log("Resultat = ", 
                String(Factorielle(Number(n1))));
            console.log("------------------------------", reset);
            break;
        }
        case 8: {
            console.log(blue, "------------------------------");
            console.log("Merci Pour Votre Utlisation!!!", );
            console.log("------------------------------", reset);
            
            return; // break the function execution
        }
        default: {
            console.log(red,"------------------------------");
            console.log("Le Nombre Invalide!!!");
            console.log("------------------------------", reset);
        }
    }
    Calculator();
    
}
Calculator();



