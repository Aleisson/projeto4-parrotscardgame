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
	let i = 0;
	while (cont) {
		for (let index = 0; index < 2; index++) {

			arrayCards.push(`   <div>
									<div onclick="flipselect(this)" class="card">
										<div class="front-face face">
											<img src="img/front.png" alt="papagaio">
										</div>
										<div class="back-face face">
											<img src="img/${img[i]}" alt="">
										</div>
			
									</div>
								</div>`)

		}
		cont--;
		i++;
	}

	arrayCards = arrayCards.sort(comparador);
	arrayCards.forEach(x => divContent.innerHTML += x);

}

function flipselect(card) {

	let divSelect = document.querySelectorAll(".select");



	if (!(card.classList.contains("select"))) {
		card.classList.add("select");
		card.querySelector(".front-face").style.transform = 'rotateY(-180deg)';
		card.querySelector(".back-face").style.transform = 'rotateY(0deg)';
		card.removeAttribute("onclick");
		divSelect = document.querySelectorAll(".select");


		if (divSelect.length == 2) {

			setTimeout(flipbegin, 500);
		
		}

	}
}

function flipbegin() {
	
	let select =  document.querySelectorAll(".select");
	if (select[0].querySelector('.back-face img').src === select[1].querySelector('.back-face img').src) {
		for (let index = 0; index < select.length; index++) {

			select[index].classList.remove("select");
			
		}
	} else {

		for (let index = 0; index < select.length; index++) {

			select[index].querySelector(".front-face").style.transform = 'rotateY(0deg)';
			select[index].querySelector(".back-face").style.transform = 'rotateY(180deg)';
			select[index].classList.remove("select");
			select[index].setAttribute("onclick", "flipselect(this)");

		}
	}
}

entradacartas();





//setTimeout()

// card.querySelector(".front-face").style.transform = 'rotateY(-180deg)';
// card.querySelector(".back-face").style.transform = 'rotateY(0deg)';
// teste[0].querySelector('img').src.split('img/')[1]