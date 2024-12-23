// start working with prompt
const ps = require("../calculator_app/src/node_modules/prompt-sync"); // import the prompt-sync module via npm
const prompt = ps(); // create prompt function


// import the class
const Calculator = require("./Calculator");


// color Declaration
const reset = '\x1b[0m';
const red = '\x1b[31m';
const green = '\x1b[32m';
const blue = "\x1b[34m";


let choix;
do {
    try {
        Calculator.Menu();
        choix = Number(prompt("Enterz Votre Choix: "));
        let object_calc = new Calculator();
        switch(choix) {
            case 1:
            case 2:
            case 3:
            case 4: 
            case 8:
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
                } 
                else if(choix == 8) {
                    console.log("Resultat = ", 
                        String(object_calc.Pourcentage(Number(n1), Number(n2))));
                }
                else {
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
                let re = object_calc.Puissance(Number(n1), Number(n2));
                console.log(green, "------------------------------");
                if (re == -1) {
                    console.log(red, "⚠️ Forme Indéterminée !!!", green);
                } else {
                    console.log("Resultat = ", String(re));
                } 
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
            case 9: {
                console.log(blue, "------------------------------");
                console.log("✅ Merci Pour Votre Utilisation!!!", );
                console.log("------------------------------", reset);
                return; // break the app execution
            }
            default: {
                console.log(red,"------------------------------");
                console.log("⚠️ Le Nombre Invalide!!!");
                console.log("------------------------------", reset);
            }
        }
    } catch(error) {
        console.log(error);
    }

} while(choix != 9);


