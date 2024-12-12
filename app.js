const ps = require("prompt-sync"); // import the prompt-sync module via npm
const prompt = ps(); // create prompt function

// Color Declaration
const reset = '\x1b[0m';
const red = '\x1b[31m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const blue = "\x1b[34m";

class Calculator {
    Addition(n1, n2) {
        return n1 + n2;
    }

    Soustraction(a, b) {
        return a - b;
    }

    Multiplication(a, b) {
        return a * b;
    }

    Division(a, b) {
        if (b == 0) {
            return -1;
        } else return a / b;
    }

    Puissance(a, b) {
        return a ** b;
    }

    Racine_carree(a) {
        return Math.sqrt(a);
    }

    Factorielle(n) {
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

    static Menu() {
        console.log("➕ 1. Addition");
        console.log("➖ 2. Soustraction");
        console.log("✖️ 3. Multiplication");
        console.log("➗ 4. Division");
        console.log("💥 5. Puissance");
        console.log("🌱 6. Racine carrée");
        console.log("⭐ 7. Factorielle");
        console.log("🚪 8. Quitter");
    }

}

let choix;
do {
    Calculator.Menu();
    choix = Number(prompt("Enterz Votre Choix: "));
    let object_calc = new Calculator();
    switch(choix) {
        case 1:
        case 2:
        case 3:
        case 4: 
            let n1 = prompt("Enterz Premier nomber: ");
            let n2 = prompt("Enterz Deuxieme nomber: ");
            console.log(green, "------------------------------");
            if (choix == 1) {
                console.log("Resultat = ",
                    String(object_calc.Addition(Number(n1), Number(n2))));
            } else if (choix == 2) {
                console.log("Resultat = ",
                    String(object_calc.Soustraction(Number(n1), Number(n2))));
            } else if (choix == 3) {
                console.log("Resultat = ", 
                    String(object_calc.Multiplication(Number(n1), Number(n2))));
            } else {
                let re = object_calc.Division(Number(n1), Number(n2));
                if (re == -1) {
                    console.log(red, "⚠️ Division par zero!!!", green);
                } else {
                    console.log("Resultat = ", String(re));
                }
            }
            console.log("------------------------------", reset);
            break;
        case 5: {
            let n1 = prompt("Enterz la base : ");
            let n2 = prompt("Enterz l'exposant : ");
            console.log(green, "------------------------------");
            console.log("Resultat = ", 
                String(object_calc.Puissance(Number(n1), Number(n2))));
            console.log("------------------------------", reset);
            break;
        }
        case 6: {
            let n1 = prompt("Enterz un nomber: ");
            console.log(green, "------------------------------");
            console.log("Resunltat = ", 
                String(object_calc.Racine_carree(Number(n1))));
            console.log("------------------------------", reset);
            break;
        }
        case 7: {
            let n1 = prompt("Enterz un nomber: ");
            console.log(green, "------------------------------");
            console.log("Resultat = ", 
                String(object_calc.Factorielle(Number(n1))));
            console.log("------------------------------", reset);
            break;
        }
        case 8: {
            console.log(blue, "------------------------------");
            console.log("✅ Merci Pour Votre Utlisation!!!", );
            console.log("------------------------------", reset);
            return; // break the app execution
        }
        default: {
            console.log(red,"------------------------------");
            console.log("⚠️ Le Nombre Invalide!!!");
            console.log("------------------------------", reset);
        }
    }

} while(choix != 8);


