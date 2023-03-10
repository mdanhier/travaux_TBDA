function testLetters(str) {
    /* sert à vérifier si l'argument passé est bien constitué de lettres (pour un prénom par exemple),
    malheureusement il est difficile de prendre en compte tous les caractères possibles dans toutes les langues */
    return (!(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçœæčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(str)) || str === null);
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
    return (isNaN(nb) || nb === '' || nb === null);
}

function testNumbersMany(...nbArr) {
    // effectue simplement une boucle de la fonction testNumbers avec autant d'arguments que donnés
    return nbArr.some(function (nb) {
        return (testNumber(nb));
    })
}

function multiply(x, y) {
    // fonction de multiplication basique
    return x * y;
}
function substract(x, y) {
    // fonction de soustraction basique
    return x - y;
}
function add(x, y) {
    // fonction d'addition basique
    return +x + +y;
}
function divide(x, y) {
    // fonction de division basique
    if (y == 0) throw new Error("La division par 0 est impossible.");
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
    let x = prompt("Entrez un nombre.");
    let y = prompt("Entrez un multiplicateur.");
    try {
        if (testNumbersMany(x, y)) throw new Error("Merci de rentrer des nombres corrects.");
        else alert("Le produit de " + x + " par " + y + " est " + multiply(x, y));
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
    let ex2c = 1.00;
    alert("c vaut " + ex2c + " et a vaut " + ex2a + ".");
    ex2c += ex2a;
    alert("On ajoute à c la valeur de a, c vaut maintenant " + ex2c + ".")
    ex2a = "100";
    ex2c = 1.00;
    ex2c += +ex2a;
    alert("Si on souhaite réellement additionner et non concaténer, il faut rajouter un '+' avant la variable a (qui a été définie comme une chaîne de caractères). Quand on procède ainsi, c vaut " + ex2c + ".");
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
    let nb = prompt("Entrez un nombre.");
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
        let birthDate = new Date(birthDateStrTrimmed.substr(4, 4), +birthDateStrTrimmed.substr(2, 2) - 1, birthDateStrTrimmed.substr(0, 2));
        if (isNaN(Date.parse(birthDate))) throw new Error("Merci de rentrer une date correcte.");
        else return ~~((Date.now() - birthDate) / (31557600000));
    }
    let birthDateStr = prompt("Entrez votre date de naissance au format JJ MM YYYY.");
    try {
        let age = calcAge(birthDateStr);
        if (age >= 18) alert("Vous avez " + age + " ans. Vous êtes enfin majeur !");
        else alert("Vous avez " + age + " ans. Vous êtes toujours mineur.. Encore " + (18 - age) + " ans avant la majorité !");
    } catch (err) {
        alert(err.message);
    }
}

function ex3_3() {
    let x = prompt("Entrez un premier nombre.");
    let y = prompt("Entrez un deuxième nombre.");
    let o = prompt("Entrez un opérateur parmis + - * /.");
    // simple switch pour évaluer quel opérateur l'utilisateur a entré
    try {
        if (testNumbersMany(x, y)) throw new Error("Merci de rentrer des nombres corrects.");
        else switch (o) {
            case '+':
                return alert("Le résultat de " + x + o + y + " est : " + add(x, y));
            case '-':
                return alert("Le résultat de " + x + o + y + " est : " + substract(x, y));
            case '*':
                return alert("Le résultat de " + x + o + y + " est : " + multiply(x, y));
            case '/':
                return alert("Le résultat de " + x + o + y + " est : " + divide(x, y));
            case '':
                throw new Error("Vous devez entrer un opérateur.");
            default:
                throw new Error(o + " n'est pas un opérateur valide.");
        }
    } catch (err) {
        alert(err.message);
    }
}

function ex4_1() {
    let name;
    let namesArr = [];
    try {
        while (name != "") {
            if (testLetters(name)) throw new Error("Merci de rentrer un prénom correct.");
            else {
                // on demande un prénom et si il n'est pas vide, on le rentre dans un tableau, et on recommence
                name = prompt("Entrez un prénom.");
                if (name == "") break;
                namesArr.push(name);
            }
        }
        if (namesArr.length == 0) throw new Error("Merci de rentrer au minimum un prénom.");
        // on affiche le tableau contenant tous les prénoms
        alert("Vous avez entré " + namesArr.length + " prénom(s). Voici la liste : " + namesArr);
    }
    catch (err) {
        alert(err.message);
    }
}

function ex4_2() {
    let nb = prompt("Entrez un nombre.");
    let nbArr = [];
    try {
        if (testNumber(nb)) throw new Error("Merci de rentrer un nombre correct.");
        if (!parseFloat(nb)) throw new Error("Il n'y a pas de nombre plus petit que 0.");
        // on demande un nombre et on parcourt une boucle de 0 jusqu'à ce nombre en insérant chaque valeur de l'index dans un tableau
        else for (let i = 0; i < nb; i++) {
            nbArr.push(i);
        }
        alert("Les nombres plus petits que " + nb + " sont : " + nbArr + ".");
    }
    catch (err) {
        alert(err.message);
    }
}

function ex4_3() {
    let nb = 0;
    let nbArr = [];
    let sum;
    let avg;
    try {
        while (true) {
            if (testNumber(nb)) throw new Error("Merci de rentrer un nombre correct.");
            else {
                // On demande un nombre jusqu'à ce que l'utilisateur ne rentre rien, on rentre à chaque fois le nombre donné dans un tableau
                nb = prompt("Entrez un nombre. Pour arrêter la saisie, appuyez sur Entrée");
                if (nb == "") break;
                nbArr.push(nb);
            }
        }
        if (nbArr.length == 0) throw new Error("Merci de rentrer au minimum un nombre.");
        // calcul de la somme via une fonction sur le tableau, puis de la moyenne grâce à la somme obtenue
        sum = nbArr.reduce((x, y) => +x + +y, 0);
        avg = sum / nbArr.length;
        alert("La somme des nombres " + nbArr + " est " + sum + ".\nLeur moyenne est " + avg + ".");
    }
    catch (err) {
        alert(err.message);
    }
}

function ex4_4() {
    let nb = prompt("De quel nombre voulez-vous voir la table de multiplication ?");
    let mul = prompt("Jusqu'à quel multiple voulez-vous aller ?");
    let msg = "";
    try {
        if (testNumbersMany(nb, mul)) throw new Error("Merci de rentrer des nombres corrects.");
        // on fait une boucle de 0 au Multiple pour calculer chaque multiple et les concaténer pour l'affichage
        for (let i = 0; i <= mul; i++) {
            msg += nb + " x " + i + " = " + i * nb + "\n";
        }
        alert(msg);
    }
    catch (err) {
        alert(err.message);
    }
}

function ex4_5() {
    let str = prompt("Entrez une chaîne de caractères.");
    let strFor;
    let fvow;
    let count = 0;
    try {
        if (str == "") throw new Error("Merci de rentrer une chaîne de caractères corrects.");
        /* j'ai décidé de formater la chaîne pour retirer les diacritiques et transformer les voyelles spéciales en voyelles simples en "a"
        Cette procédure me permet d'éviter de comparer toutes les voyelles à chaque itération de boucle */
        strFor = (str.normalize("NFD").toLowerCase().replace(/\p{Diacritic}/gu, "").replace(/\{|ø|œ|æ|e|i|o|u|y|\}/gu, "a"))
        fvow = strFor.indexOf("a");
        for (let i = fvow, j = (fvow + 1); i <= strFor.length; i++, j++) {
            if (strFor.substring(i, j) == "a") count++;
        }
        alert("Il y a " + count + " voyelles dans la chaîne \"" + str + "\".")
    }
    catch (err) {
        alert(err.message);
    }
}



function ex5_1(reset) {
    function resetEx5_1() {
        // permet de réinitialiser la div pour pouvoir retester le bouton sans recharger la page
        document.getElementById("bfimg").innerHTML = ""
    }

    function showEx5_1(x, y) {
        // on rajoute l'image et le texte dans la div prévue à cet effet
        document.getElementById("bfimg").innerHTML = "<img src='assets/media/papillon.jpg' alt='Papillon'><p>Le cube de " + x + " est égal à " + Math.pow(x, 3) + ".</p><p>Le produit de " + x + " x " + y + " est égal à " + multiply(x, y) + ".</p>";
    }
    if (reset) {
        try {
            resetEx5_1();
        }
        catch (err) {
            alert(err.message);
        }
    }
    else {
        let x = prompt("Entrez un nombre.");
        let y = prompt("Entrez un multiplicateur.");
        try {
            // si tout se passe bien, on appelle la fonction showEx5_1 pour afficher le contenu de la div
            if (testNumbersMany(x, y)) throw new Error("Merci de rentrer un nombre correct.");
            showEx5_1(x, y);
        }
        catch (err) {
            alert(err.message);
        }
    }
}

function ex5_2() {
    function strTok(str1, str2, n) {
        // on pense à faire le calcul n-1 car l'utilisateur compte à partir de 1 contrairement au tableau qui lui commence à 0.
        if (str1.indexOf(str2) < 0) throw new Error("Ce caractère n'apparaît pas dans la chaîne.");
        else return (str1.split(str2)[n - 1]);
    }
    let str = prompt("Entrez des mots séparés par un même caractère.");
    let char = prompt("Entrez le caractère en question.");
    let index = prompt("Quel est numéro du mot à obtenir ?");
    try {
        // on pense à vérifier que l'utilisateur ne rentre pas n'importe quoi / n'oublie pas de rentrer quelque chose
        if (testNumber(index)) throw new Error("Merci de rentrer un numéro correct.");
        if (char == '') throw new Error("Merci de rentrer un caractère correct.");
        let token = strTok(str, char, index);
        if (typeof token === "undefined" || token == '') throw new Error("Impossible de trouver le mot.");
        else alert("Le mot n°" + index + " est " + token + ".");
    } catch (err) {
        alert(err.message);
    }
}

function ex6_1() {
    let x = prompt("Entrez un nombre de colonnes.");
    let y = prompt("Entrez un nombre de lignes.");
    let arr = [];
    let format = "";
    let val;
    try {
        if (testNumbersMany(x, y)) throw new Error("Merci de rentrer des nombres corrects.");
        if (x == 0 || y == 0) throw new Error("Merci de rentrer une taille supérieure à 0.");
        // On fait ici une boucle imbriquée dans une autre boucle afin de gérer le tableau multidimensionnel
        for (let j = 0; j < y; j++) {
            arr[j] = {}
            for (let i = 0; i < x; i++) {
                val = prompt("Entrez une valeur à insérer dans le tableau en position [" + i + "]" + "[" + j + "].");
                arr[j][i] = val;
                format += "[" + val + "]";
            }
            // Je formate le tableau dans une chaîne de caractères à part pour l'afficher de manière plus claire à l'utilisateur
            format += "\n";
        }
        alert("On notera que chaque entrée se présente sous la forme \"index:valeur\" : " + JSON.stringify(arr) + "\nSous un format plus lisible, cela donne:\n" + format);
    } catch (err) {
        alert(err.message);
    }
}


function ex7_1() {
    let nb = 1;
    let nbArr = [];
    let sum;
    let avg;
    try {
        while (true) {
            if (testNumber(nb)) throw new Error("Merci de rentrer un nombre correct.");
            else {
                // On demande un nombre jusqu'à ce que l'utilisateur ne rentre rien, on rentre à chaque fois le nombre donné dans un tableau
                nb = prompt("Entrez un nombre. Pour arrêter la saisie, appuyez sur Entrée.");
                if (nb == "") break;
                nbArr.push(nb);
            }
        }
        if (nbArr.length == 0) throw new Error("Merci de rentrer au minimum un nombre.");
        // calcul de la somme via une fonction sur le tableau, puis de la moyenne grâce à la somme obtenue
        sum = nbArr.reduce((x, y) => +x + +y, 0);
        avg = sum / nbArr.length;
        alert("La somme des " + nbArr.length + " nombres (" + nbArr + ") est " + sum + ".\nLeur moyenne est " + avg + ".");
    }
    catch (err) {
        alert(err.message);
    }
}

function ex8_1() {
    // On ouvre une autre page HTML où j'ai fait l'exercice afin de tester un peu la fonction write.document sans détruire la mienne
    window.open('ex8.html')
    alert("On remarquera que la fonction alert() ne permet pas d'utiliser du code HTML.")
}

var myst;
function ex9_1(nb, reset) {
    function resetEx9_1() {
        // permet de réinitialiser le nombre mystère et le texte sur la page
        document.getElementById('liste9_1').innerHTML =
            "<li>Entrez votre proposition pour un nombre de 0 à 100.</li>";
        myst = Math.floor(Math.random() * 101);
    }
    function tryEx9_1(nb) {
        // on regarde si l'utilisateur a rentré le bon nombre
        if (myst > nb) document.getElementById('liste9_1').innerHTML += ("<li>" + nb + " est plus petit que le nombre mystère.</li>")
        else if (myst < nb) document.getElementById('liste9_1').innerHTML += ("<li>" + nb + " est plus grand que le nombre mystère.</li>")
        else document.getElementById('liste9_1').innerHTML += ("<li>" + myst + " était le nombre mystère ! Bravo.</li>")
    }
    // on génère un nombre aléatoire entre 0 et 100 si la variable n'existe pas déjà
    if (typeof myst === 'undefined') myst = Math.floor(Math.random() * 101);
    if (reset) {
        try {
            resetEx9_1();
        }
        catch (err) {
            alert(err.message);
        }
    }
    else {
        try {
            // si tout se passe bien, on appelle la fonction tryEx9_1
            if (testNumber(nb)) throw new Error("Merci de rentrer un nombre correct.");
            tryEx9_1(nb);
        }
        catch (err) {
            alert(err.message);
        }
    }
}

function ex10_1(form) {
    try {
        // filtres RegEx pour le code postal et l'e-mail
        let zipFilter = new RegExp(/^[0-9]{5}$/);
        let emailFilter = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/);
        // on fait chaque test pour vérifier que les valeurs attendues sont bien présentes
        if (form.elements['company'].value.trim() == '') throw new Error("La société ne peut pas être vide.");
        if (form.elements['contact'].value.trim() == '') throw new Error("La personne à contacter ne peut pas être vide.");
        if (!zipFilter.test(form.elements['zip'].value)) throw new Error("Le code postal doit comporter 5 chiffres.");
        if (form.elements['city'].value.trim() == '') throw new Error("La ville ne peut pas être vide.");
        if (!emailFilter.test(form.elements['email'].value)) throw new Error("L'adresse e-mail est invalide.");
        alert('Le formulaire a bien été envoyé.')
    } catch (err) {
        alert(err.message);
    }
    return false;
}

function ex10_1list(sel) {
    try {
        // permet de mettre à jour la textarea concernant l'environnement technique grâce à la liste
        let seltxt = sel.options[sel.selectedIndex].text;
        // si c'est la valeur par défaut, on empêche l'utilisateur de l'insérer
        if (seltxt == "Choisissez") alert("Vous ne pouvez pas insérer cette valeur...");
        // autrement, on l'insère dans le textarea juste à côté
        else {
            let areatxt = document.getElementById('tecenv')
            if (areatxt.value == '') areatxt.value += seltxt;
            else areatxt.value += ', ' + seltxt;
        }
    } catch (err) {
        alert(err.message);
    }
}