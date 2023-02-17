// Tout ce qui se trouve en dessous sert à afficher les popups d'erreur grâce à Popper.js et à un modifier communautaire

const animFirstname = document.getElementById("firstname");
const tooltipFirstname = document.getElementById("tooltipFirstname");

const animLastname = document.getElementById("lastname");
const tooltipLastname = document.getElementById("tooltipLastname");

const animEmail = document.getElementById("email");
const tooltipEmail = document.getElementById("tooltipEmail");

const animBirth = document.getElementById("birth");
const tooltipBirth = document.getElementById("tooltipBirth");

const animGender = document.getElementById("gender");
const tooltipGender = document.getElementById("tooltipGender");

const animZip = document.getElementById("zip");
const tooltipZip = document.getElementById("tooltipZip");

const animTopic = document.getElementById("topic");
const tooltipTopic = document.getElementById("tooltipTopic");

const animRequest = document.getElementById("request");
const tooltipRequest = document.getElementById("tooltipRequest");

const animdataCB = document.getElementById("dataCB");
const tooltipdataCB = document.getElementById("tooltipdataCB");

const instanceFirstname = Popper.createPopper(animFirstname, tooltipFirstname, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 10],
            }
        },

    ],
});
const instanceLastname = Popper.createPopper(animLastname, tooltipLastname, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 10],
            }
        },

    ],
});
const instanceEmail = Popper.createPopper(animEmail, tooltipEmail, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 10],
            }
        },

    ],
});
const instanceBirth = Popper.createPopper(animBirth, tooltipBirth, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 10],
            }
        },

    ],
});
const instanceGender = Popper.createPopper(animGender, tooltipGender, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 10],
            }
        },

    ],
});
const instanceZip = Popper.createPopper(animZip, tooltipZip, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 10],
            }
        },

    ],
});
const instanceTopic = Popper.createPopper(animTopic, tooltipTopic, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 10],
            }
        },

    ],
});
const instanceRequest = Popper.createPopper(animRequest, tooltipRequest, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 10],
            }
        },

    ],
});
const instancedataCB = Popper.createPopper(animdataCB, tooltipdataCB, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 10],
            }
        },

    ],
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~ ici commence le code personnel ~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// sert à réinitialiser le formulaire après demande de confirmation

function confirmReset() {
    document.getElementById("formContact").reset();
}

function calculateAge(date) {
    var diff = Date.now() - date.getTime();
    var age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
}

//filtre RegEx pour les noms (sans chiffres)
let nameFilter = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçœæčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);
//filtre RegEx pour l'adresse e-mail ([*]@[*].[*])
let emailFilter = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/);
//filtre RegEx pour le code postal (5 chiffres)
let zipFilter = new RegExp(/^[0-9]{5}$/);
//filtre RegEx pour la date (YYYY-MM-DD)
let dateFilter = new RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)

let allNameElements = document.querySelectorAll("[name]");
allNameElements.forEach((el1) => {
    el1.onclick = function () {
        document.querySelectorAll("[id^='tooltip']").forEach((el2) => {
            el2.classList.add("d-none");
        })
    }
})

let formModal = new bootstrap.Modal(document.getElementById("formDataModal"), {});

function checkForm(form) {
    try {
        let msg = "";
        // je récupère toutes les valeurs du tableau dans des variables
        let firstname = form.elements["firstname"].value;
        let lastname = form.elements["lastname"].value;
        let email = form.elements["email"].value;
        let birth = form.elements["birth"].value;
        let genderArr = document.getElementsByName("gender");
        let zip = form.elements["zip"].value;
        let city = form.elements["city"].value;
        let address = form.elements["address"].value;
        let topic = form.elements["topic"].value;
        let request = form.elements["request"].value;
        let dataCB = form.elements["dataCB"].checked;
        // j'effectue des tests sur chacune des données requises dans le tableau
        if (nameFilter.test(firstname)) msg += "<p>Votre vous appelez " + firstname + " ";
        else {
            tooltipFirstname.getElementsByTagName("span")[0].innerHTML = "Le prénom est invalide";
            tooltipFirstname.classList.remove("d-none");
            instanceFirstname.update();
            return false;
        }
        if (nameFilter.test(lastname)) msg += lastname + ".</p>"
        else {
            tooltipLastname.getElementsByTagName("span")[0].innerHTML = "Le nom est invalide";
            tooltipLastname.classList.remove("d-none");
            instanceLastname.update();
            return false;
        }
        if (emailFilter.test(email)) msg += "<p>Votre adresse e-mail est : " + email + ".</p>";
        else {
            tooltipEmail.getElementsByTagName("span")[0].innerHTML = "L'e-mail est dans un format invalide (email@example.com)";
            tooltipEmail.classList.remove("d-none");
            instanceEmail.update();
            return false;
        }
        if (genderArr[0].checked) {
            msg += "<p>Vous êtes un homme de ";
        }
        else if (genderArr[1].checked) {
            msg += "<p>Vous êtes une femme de ";
        }
        else {
            tooltipGender.getElementsByTagName("span")[0].innerHTML = "Vous devez préciser votre genre";
            tooltipGender.classList.remove("d-none");
            instanceGender.update();
            return false;
        }
        if (dateFilter.test(birth)) {
            birthObj = new Date(birth);
            let age = calculateAge(birthObj);
            if (age >= 18) msg += age + " ans.</p>";
            else {
                tooltipBirth.getElementsByTagName("span")[0].innerHTML = "Vous devez avoir au minimum 18 ans";
                tooltipBirth.classList.remove("d-none");
                instanceBirth.update();
                return false;
            }
        }
        else {
            tooltipBirth.getElementsByTagName("span")[0].innerHTML = "Vous devez rentrer une date valide";
            tooltipBirth.classList.remove("d-none");
            instanceBirth.update();
            return false;
        }
        if (zipFilter.test(zip)) msg += "<p>Votre adresse est : " + zip;
        else {
            tooltipZip.getElementsByTagName("span")[0].innerHTML = "Le code postal se compose de 5 chiffres.";
            tooltipZip.classList.remove("d-none");
            instanceZip.update();
            return false;
        }
        if (city != "") msg += " " + city;
        if (address != "") msg += " " + address;
        if (topic != "") msg += "</p><p>Votre requête concerne \"" + document.querySelector("[value=" + topic + "]").innerHTML + "\"</p>";
        else {
            tooltipTopic.getElementsByTagName("span")[0].innerHTML = "Vous devez sélectionner un sujet";
            tooltipTopic.classList.remove("d-none");
            instanceTopic.update();
            return false;
        }
        if (request != "") msg += "<p>Votre requête est la suivante : " + request + "</p>";
        else {
            tooltipRequest.getElementsByTagName("span")[0].innerHTML = "Vous devez entrer votre demande";
            tooltipRequest.classList.remove("d-none");
            instanceRequest.update();
            return false;
        }
        if (dataCB) msg += "<p>Vous avez accepté le traitement informatique de vos données.</p>";
        else {
            tooltipdataCB.getElementsByTagName("span")[0].innerHTML = "Vous devez entrer votre demande";
            tooltipdataCB.classList.remove("d-none");
            instancedataCB.update();
            return false;
        }
        document.getElementById("textFormData").innerHTML = msg;
        formModal.show();
    } catch (error) {
        alert(error);
    }
    return false;
}