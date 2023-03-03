'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

let pageSave = document.querySelector('html');

function onLoad() {
	defineHeading1();
	if (document.querySelectorAll('h2').length !== 0) {
		defineHeading2();
	}
	defineHeading3();
	defineHeading4();
	//swapInnerHTML();
	dateAlter();
	let pTarget = document.getElementById('nbLeft');
	pTarget.addEventListener("click", getNbDays);

	window.setInterval(updateClock1, 1000);
	window.setInterval(updateClock2, 1000);
}

function defineHeading1() {
	let newTitle = document.getElementById("title").innerHTML;
	document.querySelector('title').innerHTML = newTitle;
}

function defineHeading2() {
	let newTitle = document.querySelector('h2').innerHTML;
	document.querySelector('title').innerHTML = newTitle;
}

function defineHeading3() {
	let h2List = document.querySelectorAll('h2');
	let newTitle = "ouh";
	if (h2List.length === 0) {
		newTitle = document.querySelector('meta[name="author"]').content;
	}
	else {
		newTitle = h2List[h2List.length - 1].innerHTML;
	}
	document.querySelector('title').innerHTML = newTitle;
}

function defineHeading4() {
	let h2List = document.querySelectorAll('.firstOrLast');
	let newTitle = "ouh";
	if (h2List.length !== 0) {
		if (h2List.length % 2 == 0) {
			newTitle = h2List[0].innerHTML;
		}
		else {
			newTitle = h2List[h2List.length - 1].innerHTML;
		}
	}
	else {
		newTitle = document.querySelector('meta[name="author"]').content;
	}
	document.querySelector('title').innerHTML = newTitle;
}

function swapInnerHTML() {
	let pList = document.querySelectorAll('p');
	let swapText = "ouh";
	if (pList.length !== 0) {
		swapText = pList[pList.length - 1].innerHTML;
		pList[pList.length - 1].innerHTML = pList[0].innerHTML;
		pList[0].innerHTML = swapText;
	}
}

function dateAlter() {
	let divList = document.querySelectorAll('div#update-date');
	if (divList.length !== 0) {
		let date = new Date();
		date = date.toLocaleString('fr-FR', {
			weekday: 'long',
			year: "numeric",
			month: 'long',
			day: 'numeric'
		})
		let auteurs = document.querySelectorAll('meta[name="author"]');
		let auteurf = auteurs[0].content;
		let auteurl = auteurs[auteurs.length - 1].content;
		let s = "Dernière modification : le " + date + " par " + auteurf;
		divList[divList.length - 1].innerHTML = s;
	}
}

function getNbDays() {
	let pTarget = document.getElementById('nbLeft');
	let date = new Date();
	let futureDate = new Date(date.getFullYear(), 6, 19)

	let nbJours = futureDate - Date.now();
	nbJours = Math.floor(nbJours / (1000 * 60 * 60 * 24));
	futureDate = futureDate.toLocaleString('fr-FR', {
		year: "numeric",
		month: 'long',
		day: 'numeric'
	})
	let jours = (nbJours == 1 ? "" : "s");
	let s = "Il reste " + nbJours + " jour" + jours + " avant le " + futureDate;
	pTarget.innerHTML = s;
}

function updateClock1() {
	let pTarget = document.getElementById('clockA');
	let tmp = new Date();

	tmp = tmp.toLocaleString('fr-FR', {
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	});
	pTarget.innerHTML = tmp;
}

function updateClock2() {
	let now = new Date();

	const secondHand = document.querySelector('.second-hand');
	const minsHand = document.querySelector('.min-hand');
	const hourHand = document.querySelector('.hour-hand');

	let seconds = now.getSeconds();
	const secondsDegrees = seconds*6+89;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	let mins = now.getMinutes();
	const minsDegrees = mins*6+90;
	minsHand.style.transform = `rotate(${minsDegrees}deg)`;
	let hour = now.getHours();
	//hour = hour >= 12 ? hour-12 : hour
	const hourDegrees = hour*30+90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function formColor(input){
	let inputTarget = input.value;
	console.log("func : "+inputTarget)
	if(inputTarget){
		if(!isNaN(inputTarget)){
			input.style.backgroundColor = 'green';
		}
		else{
			input.style.backgroundColor = 'red';
		}
	}
	else{
		input.style.backgroundColor = 'white';
	}
}

function openMenu(element,img){
	let divPop = document.getElementById(element);
	let imgUp = document.getElementById(img);
	if(divPop.style.display != "block"){
		imgUp.src = "assets\\images\\minus.gif";
		divPop.style.display = "block";
	}
	else{
		imgUp.src = "assets\\images\\plus.gif";
		divPop.style.display = "none";
	}	
}

function search(word){
	//sauvegarder ou enregistrer le corps de la page
	//rechercher le texte et le remplacer par <span>
	//surligner le(s) mot(s) en jaune
	//console.log(pageSave);
	let p = document.querySelector('html');
	p = pageSave;
	word = document.getElementById("mot").value;
	searchLoop(p,word);
}

function searchLoop(element,word){
	console.log("\nnode name : "+element.nodeName);
	console.log("node type : "+element.nodeType);
	if(element.nodeType == 1){
		console.log("textNode : "+element.innerHTML);
		if(element.innerHTML && element.innerHTML.includes(word)){
			element.innerHTML.replaceWith('<span id="yellow">'+word+'</span>');
		}
	}
	if(element.hasChildNodes){
		element.childNodes.forEach(item => {
			if(item.nodeName != "HEAD"){
				searchLoop(item,word);
			}			
		});
	}
}
