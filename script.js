const img = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]

let numCartas = Number(prompt("Quantas cartas quer jogar? Numero entre (4 a 14, sendo par)"));


function comparador() {
	return Math.random() - 0.5;
}


function entradacartas() {
	let cond = 1;

	while (cond) {

		if (!(numCartas % 2) && numCartas >= 4 && numCartas <= 14) {
			cond = 0;
			addcard(numCartas);
		} else {

			numCartas = Number(prompt("Quantas cartas quer jogar? Numero entre (4 a 14, sendo par)"));

		}
	}
}

function addcard(num) {

	let cont = num / 2;
	let arrayCards = [];
	let divContent = document.querySelector(".content");

	while (cont) {
		for (let index = 0; index < 2; index++) {

			arrayCards.push(`   <div>
			<div class="card">
				<div class="front-face face">
					<img src="img/front.png" alt="papagaio">
				</div>
				<div class="back-face face">
					<img src="img/${img[cont]}" alt="">
				</div>
			
			</div>
			</div>`)

		}
		cont--;
	}

	arrayCards.forEach( x => divContent.innerHTML += x);


	
}



entradacartas();






// querySelector(".front-face").style.transform = 'rotateY(-180deg)';
// querySelector(".back-face").style.transform = 'rotateY(0deg)';
// teste[0].querySelector('img').src.split('img/')[1]