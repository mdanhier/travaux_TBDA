function testLetters(str) {
    /* sert à vérifier si l'argument passé est bien constitué de lettres (pour un prénom par exemple),
    malheureusement il est difficile de prendre en compte tous les caractères possibles dans toutes les langues */
    return (!(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(str)) || str === null);
}

function testLettersMany(...strArr) {
    // effectue simplement une boucle de la fonction testLetters avec autant d'arguments que donnés
    return strArr.some(function (str) {
        return (testLetters(str));
    }
    )
}

function testNumber(nb) {
    // sert à vérifier si l'argument passé est bien un nombre
    return (isNaN(nb) || nb == '' || nb === null);
}

function testNumbersMany(...nbArr) {
    // effectue simplement une boucle de la fonction testNumbers avec autant d'arguments que donnés
    return nbArr.some(function (nb) {
        return (testNumber(nb));
    })
}

function multiply(x, y) {
    // fonction de multiplication basique
    if (testNumbersMany(x, y)) throw new Error("Merci de rentrer deux nombres corrects.");
    else return x * y;
}
function substract(x, y) {
    // fonction de soustraction basique
    if (testNumbersMany(x, y)) throw new Error("Merci de rentrer deux nombres corrects.");
    else return x - y;
}
function add(x, y) {
    // fonction d'addition basique
    if (testNumbersMany(x, y)) throw new Error("Merci de rentrer deux nombres corrects.");
    else return +x + +y;
}
function divide(x, y) {
    // fonction de division basique
    if (testNumbersMany(x, y)) throw new Error("Merci de rentrer deux nombres corrects.");
    else if (y == 0) throw new Error("La division par 0 est impossible.");
    else return x / y;
}

function ex1_1() {
    // affiche le nom et le prénom
    function nomPrenom(nom, prenom) {
        if (testLettersMany(nom, prenom)) throw new Error("Merci de rentrer un nom et un prénom corrects.");
        else alert("Votre nom est " + nom + " et votre prénom est " + prenom);
    }
    let nom = prompt("Entrez votre nom.");
    let prenom = prompt("Entrez votre prénom.");
    try {
        nomPrenom(nom, prenom);
    } catch (err) {
        alert(err.message);
    }
}

function ex1_2() {
    let x = prompt("Entrez un premier nombre.");
    let y = prompt("Entrez un deuxième nombre.");
    try {
        alert("Le produit de " + x + " par " + y + " est " + multiply(x, y));
    } catch (err) {
        alert(err.message);
    }
}

function ex1_3() {
    // convertit les degrés Celsius en Fahrenheit
    function convertCelToFahr(cel) {
        if (testNumber(cel)) throw new Error("Merci de rentrer une température correcte.");
        else if (cel < -273.15) throw new Error("On ne peut pas descendre sous le zéro absolu 🤦‍♂️...");
        else return (cel * 9 / 5 + 32);
    }
    let cel = prompt("Entrez la température en degrés Celsius.");
    try {
        alert(cel + "°C vaut " + convertCelToFahr(cel) + "°F.");
    } catch (err) {
        alert(err.message);
    }
}


function ex2_1() {
    let ex2a = "100";
    alert("Ceci est une chaîne de caractères : " + ex2a + ".");
}
function ex2_2() {
    let ex2b = 100;
    alert("b vaut " + ex2b);
    ex2b--;
    alert("Après décrémentation, b vaut " + ex2b + ".");
}
function ex2_3() {
    let ex2a = "100";
    let ex2c = 1.00
    alert("c vaut " + ex2c + " et a vaut " + ex2a + ".");
    ex2c += ex2a;
    alert("On ajoute à c la valeur de a, c vaut maintenant " + ex2c + ".")
    ex2a = "100";
    ex2c = 1.00;
    ex2c += +ex2a;
    alert("Si on souhaite réellement additionner et non concaténer, il faut rajouter un '+' avant la variable a (qui a été définie comme une chaîne de caractères). Quand on procède ainsi, c vaut " + ex2c + ".")
}
function ex2_4() {
    let ex2d = true;
    alert("d vaut " + ex2d);
    ex2d = !ex2d;
    alert("Après inversion, d vaut " + ex2d + ".");
}

function ex3_1() {
    // sert à vérifier si un nombre est pair ou impair et renvoie true, false ou une erreur selon le résultat
    function testEvenOdd(nb) {
        if (testNumber(nb)) throw new Error("Merci de rentrer un nombre correct.");
        else if (nb % 1 != 0) throw new Error("Seul un entier peut être pair ou impair.");
        else return (nb % 2 == 0);
    }
    let nb = prompt("Entrez un nombre");
    try {
        if (testEvenOdd(nb)) alert("Nombre pair.");
        else alert("Nombre impair.");
    } catch (err) {
        alert(err.message);
    }
}

function ex3_2() {
    // nettoie la date donnée en retirant "/", "_", " " et "-"
    function cleanTrimDate(date) {
        if (date === "") throw new Error("Merci de rentrer une date correcte.");
        else return date.trim().replace(/[\/_ -]+/g, '').replace();
    }
    // calcule l'âge d'une personne (en année) selon une date passée au format DDMMYYYY en argument
    function calcAge(birthDateStr) {
        let birthDateStrTrimmed = cleanTrimDate(birthDateStr);
        let birthDate = new Date(birthDateStrTrimmed.substr(4, 4), +birthDateStrTrimmed.substr(2, 2) - 1, birthDateStrTrimmed.substr(0, 2))
        if (isNaN(Date.parse(birthDate))) throw new Error("Merci de rentrer une date correcte.");
        else return ~~((Date.now() - birthDate) / (31557600000));
    }
    let birthDateStr = prompt("Entrez votre date de naissance au format JJ MM YYYY.");
    try {
        let age = calcAge(birthDateStr);
        if (age >= 18) alert("Vous avez " + age + " ans. Vous êtes enfin majeur !")
        else alert("Vous avez " + age + " ans. Vous êtes toujours mineur.. Encore " + (18 - age) + " ans avant la majorité !")
    } catch (err) {
        alert(err.message);
    }
}

function ex3_3() {
    let x = prompt("Entrez un premier nombre.");
    let y = prompt("Entrez un deuxième nombre.");
    let o = prompt("Entrez un opérateur parmis + - * /.")
    // simple switch pour évaluer quel opérateur l'utilisateur a entré
    try {
        switch (o) {
            case '+':
                return alert("Le résultat de " + x + o + y + " est : " + add(x, y));
            case '-':
                return alert("Le résultat de " + x + o + y + " est : " + substract(x, y));
            case '*':
                return alert("Le résultat de " + x + o + y + " est : " + multiply(x, y));
            case '/':
                return alert("Le résultat de " + x + o + y + " est : " + divide(x, y));
            default:
                throw new Error(o + " n'est pas un opérateur valide.");
        }
    } catch (err) {
        alert(err.message);
    }
}

function ex4_1() {
    let prenom = prompt("Entrez un prénom.")
}