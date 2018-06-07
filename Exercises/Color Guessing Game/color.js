var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var newColorsBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		    reset();
		});
	}

	for (var i = 0; i < squares.length; i++) {
 	//check if clicked is the picked color
 		squares[i].addEventListener("click", function(){
	 		//grab color of clicked square
	 		//compare color to pickedColor
	 		var clickedColor = this.style.backgroundColor;
	 		if (clickedColor === pickedColor){
	 			messageDisplay.textContent = "Correct!"
	 			newColorsBtn.textContent = "Play Again ?";
	 			changeColor(clickedColor);
	 		}
	 		else{
	 			 this.style.backgroundColor = "#232323";
	 			 messageDisplay.textContent = "Try Again!"
	 		}
 		});
	}
	reset();
}

newColorsBtn.addEventListener("click", function(){
	  this.textContent = "New Colors";
	  var easyBtn = document.querySelector("easyBtn")
	  colors = generateRandomColor(numSquares);
	  pickedColor = pickColor();
	  colorDisplay.textContent = pickedColor;
	  for (var i = 0; i < squares.length; i++) {
 		squares[i].style.backgroundColor = colors[i];
 	  }
 	  header.style.backgroundColor = "steelblue";
 	  messageDisplay.textContent = "";
})

function changeColor (color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	header.style.backgroundColor = color;
}

function pickColor (){
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColor(num){
	var array = [];
	for (var i = 0; i < num; i++) {
		array[i] = randomColor();
		// console.log (array[i]);
	}
	// console.log (array);
	return array;
}

function randomColor(){
	var r = Math.floor( Math.random() * 256);
	var g = Math.floor( Math.random() * 256);
	var b = Math.floor( Math.random() * 256);

	var rgb = "rgb(" + r + ", " + g + ", " + b + ")";

	return rgb;
}

function reset(){
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
 	}
 	header.style.backgroundColor = "steelblue";
 	messageDisplay.textContent = "";
}