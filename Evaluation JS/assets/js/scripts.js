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

function ex1_1() {
    let nb = 1;
    try {
        while (nb >= 100) {
            if (testNumber(nb)) throw new Error("Merci de rentrer un nombre correct.");
            else {
                // On demande un nombre jusqu'à ce que l'utilisateur rentre un centenaire, on rentre à chaque fois le nombre donné dans un tableau
                nb = prompt("Entrez un nombre. Pour arrêter la saisie, entrez un âge supérieur ou égal à 100.");
                nbArr.push(nb);
                if (nb >= 100) break;
            }
        }
        if (nbArr.length == 0) throw new Error("Merci de rentrer au minimum un nombre.");
        else {

        }
    }
    catch (err) {
        alert(err.message);
    }
}