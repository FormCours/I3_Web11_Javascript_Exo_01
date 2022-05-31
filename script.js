// Récuperation des balises de l'HTML
const inputFirstname = document.getElementById('firstname');
const inputLastname = document.getElementById('lastname');
const inputSex = document.getElementById('sex');

const btnValid = document.getElementById('btn-valid');
const msgResult = document.getElementById('msg');

// Traitement lors de click sur le bouton
btnValid.addEventListener('click', () => {

    // Récuperation des données
    const firstname = inputFirstname.value;
    const lastname = inputLastname.value;
    const sex = inputSex.value;

    console.log(firstname, lastname, sex);

    // Modifier le contenu de la balise "msgResult"
    msgResult.innerText = 'Bienvenu ' + firstname + ' ' + lastname + ' !';

    // Changement de couleur (via CSS)
    msgResult.classList.remove('femme', 'homme', 'autre');

    if (sex === 'F') {
        msgResult.classList.add('femme');
    }
    else if (sex === 'H') {
        msgResult.classList.add('homme');
    }
    else {
        msgResult.classList.add('autre');
    }

    // Effacer les valeurs des inputs
    inputFirstname.value = '';
    inputLastname.value = '';
});