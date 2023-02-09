function testLetters(str) {
    return (!(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(str)) || str === null);
}

function testLettersMany(...strArr) {
    return strArr.some(function (str) {
        return (testLetters(str));
    }
    )
}

function testNumber(nb) {
    return (isNaN(nb) || nb == '' || nb === null);
}

function testNumbersMany(...nbArr) {
    return nbArr.some(function (nb) {
        return (testNumber(nb));
    })
}

function ex1_1() {
    function nomPrenom(nom, prenom) {
        if (testLettersMany(nom, prenom)) {
            throw new Error('Merci de rentrer un nom et un prénom corrects.');
        } else {
            alert("Votre nom est " + nom + " et votre prénom est " + prenom);
        }
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
    function produit(x, y) {
        if (testNumbersMany(x, y)) {
            throw new Error('Merci de rentrer deux nombres corrects.');
        } else {
            return x * y;
        }
    }
    let x = prompt('Entrez un premier nombre');
    let y = prompt('Entrez un deuxième nombre');
    let prod;
    try {
        prod = produit(x, y);
        alert("Le produit de " + x + " par " + y + " est " + prod);
    } catch (err) {
        alert(err.message);
    }
}



function ex1_3() {
    function convertCelToFahr(cel) {
        if (testNumber(cel)) {
            throw new Error('Merci de rentrer une température correcte.');
        } else if (cel < -273.15) {
            throw new Error('On ne peut pas descendre sous le zéro absolu 🤦‍♂️');
        }
        else {
            return (cel * 9 / 5 + 32);
        }
    }
    let cel = prompt('Entrez la température en Celsius');
    try {
        fahr = convertCelToFahr(cel)
        alert(cel + "°C vaut " + fahr + "°F");
    } catch (err) {
        alert(err.message);
    }
}