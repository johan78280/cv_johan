const form = document.getElementById("formulaire");

const messages = [];

function formHandler(event) {
  const message = {
    nom: document.getElementById("nom").value,
    prenom: document.getElementById("prenom").value,
    valeur: document.getElementById("message").value
  };
  messages.push(message);
  console.log("messages :", messages);
  event.preventDefault();
}

form.onsubmit = formHandler;
