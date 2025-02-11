// Class contain the Mathematical functions
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
        if (a == 0 && b == 0 || b < 0) {
            return -1;
        }
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
        console.log("💡 5. Puissance");
        console.log("🌱 6. Racine carrée");
        console.log("⭐ 7. Factorielle");
        console.log("⭐ 8. Pourcentage");
        console.log("🚪 9. Quitter");
    }
    Pourcentage(a, b) {
        return (a * b) / 100;
    }
}

// Exporting Calculator 
module.exports = Calculator;

