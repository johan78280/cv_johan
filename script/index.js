function main() {
  const form = document.getElementById("formulaire");
  const nomElt = document.getElementById("nom");
  const prenomElt = document.getElementById("prenom");
  const valeurElt = document.getElementById("message");

  const messages = [];

  function formHandler(event) {
    const message = {
      nom: nomElt.value,
      prenom: prenomElt.value,
      valeur: valeurElt.value
    };
    messages.push(message);
    console.log("messages :", messages);
    event.preventDefault();
  }

  form.onsubmit = formHandler;
}

/**
 * Version avancée de la même fonction
 */
function mainAlt() {
  const [form, nomElt, prenomElt, valeurElt] = [
    "formulaire",
    "nom",
    "prenom",
    "message"
  ].map(id => document.getElementById(id));
  const messages = [];
  form.onsubmit = event => {
    const [nom, prenom, valeur] = [nomElt, prenomElt, valeurElt].map(
      elt => elt.value
    );
    const message = { nom, prenom, valeur };
    messages.push(message);
    console.log("messages :", messages);
    event.preventDefault();
  };
}

window.addEventListener("load", main, false);
