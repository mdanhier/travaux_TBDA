// Tout ce qui se trouve en dessous sert à afficher les popups d'erreur grâce à Popper.js et à un modifier communautaire

const sameWidth = {
    name: "sameWidth",
    enabled: true,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: ({ state }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
    },
    effect: ({ state }) => {
        state.elements.popper.style.width = `${state.elements.reference.offsetWidth
            }px`;
    }
};
const animfirstname = document.getAnimations("firstname");
const tooltipfirstname = document.getAnimations("tooltipfirstname");
const animlastname = document.getAnimations("lastname");
const tooltiplastname = document.getAnimations("tooltiplastname");
Popper.createPopper(animfirstname, tooltipfirstname, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 10],
            }
        },
        sameWidth
    ],
});
Popper.createPopper(animlastname, tooltiplastname, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 10],
            }
        },
        sameWidth
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

//filtre RegEx pour les noms (sans chiffres)
let nameFilter = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçœæčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);
//filtre RegEx pour l'adresse e-mail ([*]@[*].[*])
let emailFilter = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/);
//filtre RegEx pour le code postal (5 chiffres)
let zipFilter = new RegExp(/^[0-9]{5}$/);
//filtre RegEx pour la date (YYYY-MM-DD)
let dateFilter = new RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)

function checkForm(form) {
    let firstname = form.elements["firstname"].value;
    let lastname = form.elements["lastname"].value;
    let email = form.elements["email"].value;
    let birth = form.elements["birth"].value;
    let zip = form.elements["zip"].value;
    let request = form.elements["request"].value;
    if (nameFilter.test(firstname)) console.log("firstname ok");
    if (nameFilter.test(lastname)) console.log("lastname ok");
    if (emailFilter.test(email)) console.log("email ok");
    if (dateFilter.test(birth)) {
        let birthObj = new Date(birth);

    }
    if (zipFilter.test(zip)) console.log("code postal ok");
    if (request != "") console.log("message ok !");
    if (form.elements["dataprocessCB"].checked) console.log("checkbox OK");
    console.log("ouai");
    return false;
}