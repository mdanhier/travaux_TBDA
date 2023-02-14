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
    let nb = 0;
    let young = 0;
    let adult = 0;
    let old = 0;
    let msg = "";
    try {
        while (nb < 100) {
            // On demande un nombre jusqu'à ce que l'utilisateur en rentre un supérieur ou égal à 100
            nb = prompt("Entrez un âge. Pour arrêter la saisie, entrez un âge supérieur ou égal à 100.");
            if (testNumber(nb)) throw new Error("Merci de rentrer un âge correct.");
            else {
                // on réagit différemment selon l'âge entré
                if (nb < 0)
                    throw new Error("L'âge ne peut pas être inférieur à 0...");
                else if (nb >= 0 && nb < 20) {
                    msg += "La personne de " + nb + " ans est jeune.\n";
                    young++;
                }
                else if (nb >= 20 && nb <= 40) {
                    msg += "La personne de " + nb + " ans est adulte.\n";
                    adult++;
                }
                else {
                    msg += "La personne de " + nb + " ans est vieille.\n";
                    old++;
                }
            }
        }
        msg += "Cela fait " + young + " jeune(s), " + adult + " adulte(s) et " + old + " vieille(s) personne(s)."
        alert(msg);
    }
    catch (err) {
        alert(err.message);
    }
}

function ex2_1() {
    function tableMult(nb, mul) {
        let msg = "";
        if (testNumbersMany(nb, mul)) throw new Error("Merci de rentrer des nombres corrects.");
        // on fait une boucle de 0 au Multiple pour calculer chaque multiple et les concaténer pour l'affichage
        for (let i = 0; i <= mul; i++) {
            msg += nb + " x " + i + " = " + i * nb + "\n";
        }
        alert(msg);
    }
    let nb = prompt("De quel nombre voulez-vous voir la table de multiplication ?");
    let mul = prompt("Jusqu'à quel multiple voulez-vous aller ?");
    try {
        tableMult(nb, mul);
    }
    catch (err) {
        alert(err.message);
    }
}