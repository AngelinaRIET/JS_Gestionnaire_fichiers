// recupérer un élément par son id
let pikachuType = document.getElementById("pikachu-type");

// récupérer des éléments par leur classe (peu utilisé)
let elementsDeListe = document.getElementsByClassName("list-item");

// récupérer le premier élément correspondant au sélecteur CSS employé
let premiereListe = document.querySelector("ul");

// récupérer tous les élements qui correspondent à un sélecteur CSS
let listes = document.querySelectorAll("ul");

// modifier le contenu textuel d'un élément
pikachuType.textContent = "Type: Electrique";

// modifier le contenu HTML d'un élément
listes[0].innerHTML += "<li> Attaque: Tonnerre";
listes[1].innerHTML += "<li> Attaque: Déflagration </li>";

// Accéder aux propriétés/attributs d'un élément
let lien = document.querySelector("a");
lien.href = "https://www.lemonde.fr";

// Ecouteurs d'évènements
let textCombat = document.querySelector("p");

function tonnerre() {
    textCombat.textContent = "C'est super efficace !";
}

function flammeche() {
    textCombat.textContent = "Ce n'est pas très efficace..."
}

let btnGauche = document.querySelector("button");
let btnDroite = document.querySelector("button:nth-of-type(2)");


btnGauche.addEventListener("click", tonnerre);
btnDroite.addEventListener("click", flammeche);