var buttonP1 = document.querySelector("#p1");
var buttonP2 = document.querySelector("#p2");
var buttonReset = document.querySelector("#reset");
var displayP1 = document.querySelector("#displayP1");
var displayP2 = document.querySelector("#displayP2");
var numInput = document.querySelector("input");
var displayNumIn = document.querySelector("p span");
var gameOver = false;
var count1 = 0;
var count2 = 0;
var maxScore = 5;


buttonP1.addEventListener("click", function(){
	if (!gameOver){
		count1++;
		if (count1 === maxScore) {
			gameOver = true;
			displayP1.classList.add("winner");
		}
		displayP1.textContent = count1;
	}
})

buttonP2.addEventListener("click", function(){
	if (!gameOver) {
		count2++;
		if (count2 === maxScore) {
			gameOver = true;
			displayP2.classList.add("winner");
		}	
		displayP2.textContent = count2;
	}
})

buttonReset.addEventListener("click", function(){
	reset();
})

numInput.addEventListener("change", function(){
	maxScore = Number(numInput.value);
	displayNumIn.textContent = maxScore;
})

function reset(){
	displayP1.classList.remove("winner");
	displayP2.classList.remove("winner");
	count1 = 0;
	displayP1.textContent = count1;
	count2 = 0;
	displayP2.textContent = count2;
	gameOver = false;
	numInput.value = 0;
}