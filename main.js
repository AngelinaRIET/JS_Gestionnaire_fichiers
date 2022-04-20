
// Recherche de tous les <li> de la liste de fichiers.
let mesLi = document.querySelectorAll("li");
// Recherche du paragraphe <p> affichant le nombre d'éléments sélectionnés.
let text = document.querySelector("p");


function onClickItem(event)
{
    //Activation ou désactivation de la classe CSS de sélection.
    //Récupération du fichier (le <li>) qui a déclenché l'évènement.
    //event.currentTarget représente la balise qui a déclenché l'évènement
    //sur lequel on a installé le gestionnaire d'évènement de clic.
    event.currentTarget.classList.toggle("selected");
    
    let mesFichiersSelectionnes = document.querySelectorAll(".selected");
     //Mise à jour du message indiquant le nombre de fichiers sélectionnés.
    text.textContent = mesFichiersSelectionnes.length + "élément(s) selectionné(s)"   

}
    //Boucle sur la liste de fichiers pour installer un gestionnaire d'évènement de clic (fonction onClickItem).
    for (let i=0; i< mesLi.length; i++){
    mesLi[i].addEventListener("click", onClickItem);
}



