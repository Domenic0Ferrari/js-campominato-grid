/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

// Selezionare gli elementi del DOM necessari
const eleGrid = document.querySelector('.grid');

// Generare la griglia
createGrid(100, eleGrid);

// Applicare gli event listeners a tutte le celle della griglia

const listCells = document.querySelectorAll('.cell');
for (let i = 0; i < listCells.length; i++) {
	const cell = listCells[i];
	cell.addEventListener('click', colorCell);
}




/* FUNCTION DEFINITIONS */

function createGrid(numCells, eleContainer) {
	for (let i = 1; i <= numCells; i++) {
		eleContainer.innerHTML += `<div class="cell"> ${i} </div>`
	}
}

function colorCell() {
    console.log(this);
    this.classList.toggle('clicked');
}