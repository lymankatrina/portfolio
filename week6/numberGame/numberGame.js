// Define variables
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();

// Functions
// Get the guess from the user
function checkGuess() {
	const userGuess = Number(guessField.value);
	if (guessCount === 1) {
		guesses.textContent = "Previous guesses:";
	}

	guesses.style.display = "block";
	lastResult.style.display = "block";
	lowOrHi.style.display = "block";
	guesses.textContent = `${guesses.textContent} ${userGuess}`;

	if (userGuess === randomNumber) {
		lastResult.textContent = `Congratulations! You got it right! The correct number was ${userGuess}! It took you ${guessCount} guesses.`;
		lastResult.style.display = "block";
		lastResult.style.backgroundColor = "lightgreen";
		lowOrHi.textContent = "";
		setGameOver();
	} else if (guessCount === 10) {
		lastResult.style.display = "block";
		lastResult.textContent = "!!!GAME OVER!!!";
		lowOrHi.textContent = "";
		setGameOver();
	} else {
		lastResult.style.display = "block";
		lastResult.textContent = "Wrong!";
		lastResult.style.backgroundColor = "salmon";
		if (userGuess < randomNumber) {
			lowOrHi.textContent = "Last guess was too low!";
		} else if (userGuess > randomNumber) {
			lowOrHi.textContent = "Last guess was too high!";
		}
	}

	guessCount++;
	guessField.value = "";
	guessField.focus();
}

guessField.addEventListener("change", checkGuess);
guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement("button");
	resetButton.textContent = "Start new game";
	resetButton.style.padding = "10px";
	resetButton.style.fontSize = "100%";
	resetButton.style.boxShadow = "3px 3px 6px black";
	resetButton.style.width = "75%";
	document.body.append(resetButton);
	resetButton.addEventListener("click", resetGame);
}

function resetGame() {
	guessCount = 1;

	const resetParas = document.querySelectorAll(".resultParas p");
	for (const resetPara of resetParas) {
		resetPara.textContent = "";
	}

	resetButton.parentNode.removeChild(resetButton);

	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessField.value = "";
	guessField.focus();

	lastResult.style.display = "none";
	guesses.style.display = "none";
	lowOrHi.style.display = "none";

	randomNumber = Math.floor(Math.random() * 100) + 1;
}
