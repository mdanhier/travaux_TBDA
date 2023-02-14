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

function showDivEx(msg, ex) {
    document.getElementById('divEx' + ex).innerHTML = msg;
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
                    msg += "La personne de " + parseInt(nb) + " ans est jeune.<br>";
                    young++;
                }
                else if (nb >= 20 && nb <= 40) {
                    msg += "La personne de " + parseInt(nb) + " ans est adulte.<br>";
                    adult++;
                }
                else {
                    msg += "La personne de " + parseInt(nb) + " ans est vieille.<br>";
                    old++;
                }
            }
        }
        msg += "Cela fait " + young + " jeune(s), " + adult + " adulte(s) et " + old + " vieille(s) personne(s).<br>"
        msg += "En tout, il y a " + (young + adult + old) + " personnes.";
        showDivEx(msg, 1);
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
            msg += nb + " x " + i + " = " + i * nb + "<br>";
        }
        showDivEx(msg, 2);
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

function ex3_1() {
    let name = "";
    var nameArr = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    try {
        name = prompt("Veuillez entrer un prénom à retirer.")
        if (testLetters(name)) throw new Error("Merci de rentrer un prénom correct.");
        if (nameArr.indexOf(name) >= 0) {
            nameArr.splice(nameArr.indexOf(name), 1);
            nameArr.push("");
            showDivEx(JSON.stringify(nameArr), 3);
        }
        else throw new Error("Le prénom n'a pas été trouvé.");
    }
    catch (err) {
        alert(err.message);
    }
}

function ex4_1() {
    function calcPrice(unitprice, qty) {
        let tempPrice;
        let discountPercent = 0;
        let discountPrice;
        let shippingPercent = 2;
        let shippingPrice
        let priceToPay;
        msg = "Prix : " + unitprice + "€ / Quantité : " + qty + " / ";
        // on calcule le total du prix des articles selon leur quantité
        tempPrice = Number(unitprice * qty).toFixed(2);
        msg += "Total : " + tempPrice + "€. "
        // on règle le montant de la remise selon le prix total
        if (tempPrice >= 100 && tempPrice <= 200) discountPercent = 5;
        else if (tempPrice > 200) discountPercent = 10;
        discountPrice = Number(tempPrice * (discountPercent / 100)).toFixed(2);
        tempPrice -= discountPrice;
        msg += "Remise : " + discountPercent + "% (-" + discountPrice + "€) soit " + tempPrice + "€";
        // on calcule les frais de port selon le prix après remise
        if (tempPrice >= 500) shippingPrice = 0;
        else {
            shippingPrice = Number(tempPrice * (shippingPercent / 100)).toFixed(2);
            if (shippingPrice < 6) shippingPrice = 6;
            msg += " et frais de port " + shippingPercent + "% soit " + shippingPrice + "€ (minimum 6€)";
        }
        // on calcule le prix à payer
        priceToPay = Number(+tempPrice + +shippingPrice).toFixed(2);
        msg += ". Prix à payer : " + tempPrice + " + " + shippingPrice + " = " + priceToPay + "€";
        return msg;
    }
    try {
        //unitprice = prompt("Veuillez entrer un prix unitaire.")
        //qty = prompt("Veuillez entrer une quantité.")
        /* if (testNumbersMany(unitprice, qty) || unitprice < 0 || qty < 1) throw new Error("Merci de rentrer des nombres corrects.");
        else {
            calcPrice(unitprice, qty);
        } */
        showDivEx(calcPrice(600, 1), 4)
        showDivEx(calcPrice(501, 1), 4)
        showDivEx(calcPrice(100, 2), 4)
        showDivEx(calcPrice(3, 1), 4)
    }
    catch (err) {
        alert(err.message);
    }
}