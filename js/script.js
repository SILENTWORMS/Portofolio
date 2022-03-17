const txtelement = ['I am Tech Geek', 'Technopreneur','Frelancer'];
let count = 0;
let txtIndex = 0;
let currentTxt = 0;
let words = '';

(function ngetik(){

	if(count == txtelement.length){
		count = 0;
	}
	currentTxt = txtelement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if (words.length ==currentTxt.length) {
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 500);

})();