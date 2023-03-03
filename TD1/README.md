# M413 - TD1 : Réponses aux Questions

➢ Quel sera l’évènement qui déclenchera l’appelle de votre fonction ?

la fonction onLoad() dans le td1.js


➢ Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise <h1> ?

document.getElementById("title").innerHTML


➢ Quelle propriété de l’objet représentant votre balise <h1> avez-vous utilisée pour récupérer le texte de celui-ci ?

L'id "title" que possède la balise <h1>


➢Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant la première
balise <h2> ?

document.querySelector('h2').innerHTML;
Elle sélectionne le premier élément de la page.


➢Comment faire pour connaitre le nombre de balise <h2> du document ?

let h2List = document.querySelectorAll('h2');
listLength = h2List.length;


➢Quelle méthode avez-vous utilisée pour récupérer les objets de votre classe ?

document.querySelectorAll('.firstOrLast')


➢Comment avez-vous déterminé si un nombre est pair ?

if(h2List.length %2 == 0)


➢Quelles différences existe-t-il entre les 3 propriétés innerHTML, innerText et textContent ?

textContents is all text contained by an element and all its children that are for formatting purposes only.
innerText returns all text contained by an element and all its child elements.
innerHtml returns all text, including html tags, that is contained by an element.


➢ Comment modifier votre code pour qu’il permette de sélectionner le 1er auteur de la liste ? 

let auteurs = document.querySelectorAll('meta[name="author"]'); //liste des auteurs
let auteurf = auteurs[0].content;   //premier auteur


➢ Même question avec le dernier auteur de la liste.

[...]
let auteurl = auteurs[auteurs.length-1].content;    //dernier auteur


➢ Comment obtenez-vous le nombre de jours ? 

let date = new Date();  //obtenir l'année
let futureDate = new Date(date.getFullYear(), 6, 19);   //préciser 19 juillet
let nbJours = futureDate - Date.now();  //faire le calcul (millisecond)
nbJours = Math.floor(nbJours / (1000*60*60*24));    //convertir en jours


➢ Comment faites-vous la mise à jour du texte ?

let jours = (nbJours == 1 ? "" : "s");
let s = "Il reste " + nbJours +" jour"+jours+" avant le " + futureDate;


➢ Laquelle des deux méthodes de l’objet window avez-vous utilisé ? Pourquoi ?

window.setInterval(updateClock2, 1000);
Car la fonction updateClock2 devra se répéter sans aucune modification toute les secondes. Pas besoin de l'appeler avec setTimeOut si la répétition est constante.


➢ Quel évènement avez-vous utilisé ?

<input oninput="formColor(this);" type="text" placeholder="écrit là">
oninput se déclenche dès qu'il y a une modification dans l'input.


➢ Comment avez-vous fait changer la couleur du champ texte ?

function formColor(input){
	input.style.backgroundColor = 'green';
}