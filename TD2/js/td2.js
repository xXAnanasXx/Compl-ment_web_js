'use strict';

let message = 'JavaScript is ok :)';
console.log(message);

let blueElement = null

function onLoad() {
	initSelect()
}

function initSelect() {
	//window.addEventListener('click', select)
	window.addEventListener('click', select2)
}

function select(event) {
	if (event.target.style.backgroundColor !== '') {
		event.target.style.backgroundColor = '';
	}
	else {
		event.target.style.backgroundColor = 'red';
	}
}

function select2(event) {
	let docHTML = document.querySelector("body")
	let element = event.target
	if (element.id == "insert-div" || element.id == "insert-type" || element.id == "insert-text" || element.id == "search-button" || element.id == "search-text" || element.style.backgroundColor !== '') {
		element.style.backgroundColor = '';
	}
	else {
		if (blueElement != null) blueElement.style.backgroundColor = ''
		element.style.backgroundColor = 'blue'
		blueElement = element
	}
	if (element.tagName.toLowerCase() != "html") insertElement(element)
}

function insertElement(target) {
	let Guignol = document.getElementById("insert-type").value
	let Rayan = document.getElementById("insert-text").value
	let element = "<" + Guignol + ">" + Rayan + "</" + Guignol + ">"
	if (target.id != "insert-div" && target.id != "insert-type" && target.id != "insert-text") {
		target.insertAdjacentHTML('beforebegin', element);
	}
}

function search(searchTerm) {

	// Retirer les balises span précédemment ajoutées	

	var spans = document.getElementsByClassName("search-span");
	while (spans.length > 0) {
		var span = spans[0];
		span.parentNode.replaceChild(span.firstChild, span);
	}

	// Trouver les occurrences du mot recherché dans la page
	var regex = new RegExp(searchTerm, "gi");
	var matches = document.body.innerHTML.match(regex);

	// Ajouter les balises span autour des occurrences trouvées
	if (matches) {
		matchNodes(document.body);
	}

	// Fonction récursive pour ajouter les balises span aux nœuds textuels
	function matchNodes(node) {
		if (node.nodeType === Node.TEXT_NODE) {
			var match = node.nodeValue.match(regex);
			if (match) {
				let nodeText = node.textContent.replace(regex, "<span class='search-span'>" + match[0] + "</span>");
				const newElement = document.createElement(node.tagName);
				newElement.innerHTML = nodeText;
				node.parentNode.replaceChild(newElement, node);
			}
		} else {
			for (var i = 0; i < node.childNodes.length; i++) {
				matchNodes(node.childNodes[i]);
			}
		}
	}
}

window.onload = onLoad;
