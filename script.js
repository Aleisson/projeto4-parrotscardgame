let img =[]


let numCartas = Number(prompt("Quantas cartas quer jogar? Numero entre (4 a 14, sendo par)"));


function comparador() {
	return Math.random() - 0.5;
}


console.log(typeof (numCartas))

function entradaCartas() {
	let cond = 1;

	while (cond) {

		if (!(numCartas % 2) && numCartas >= 4 && numCartas <= 14) {
			
			cond = 0;

		} else {
			
			numCartas = Number(prompt("Quantas cartas quer jogar? Numero entre (4 a 14, sendo par)"));
	
		}
	}
}

entradaCartas();



// querySelector(".front-face").style.transform = 'rotateY(-180deg)';
// querySelector(".back-face").style.transform = 'rotateY(0deg)';
// teste[0].querySelector('img').src.split('img/')[1]