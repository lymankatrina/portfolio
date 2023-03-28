// get the 2d context
const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");

function drawSmile() {
	// set line width
	ctx.lineWidth = 5;
	// draw smiley face
	ctx.beginPath();
	ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
	ctx.moveTo(110, 75);
	ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
	ctx.moveTo(65, 65);
	ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
	ctx.moveTo(95, 65);
	ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
	ctx.stroke();
}
function drawFrown() {
	// set line width
	ctx.lineWidth = 5;
	// draw smiley face
	ctx.beginPath();
	ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
	ctx.moveTo(100, 100);
	ctx.arc(75, 110, 25, 0, Math.PI, true); // Mouth (counter-clockwise)
	ctx.moveTo(65, 65);
	ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
	ctx.moveTo(95, 65);
	ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
	ctx.stroke();
}

drawSmile();

let toggle = true;
const mybutton = document.getElementById("toggle-reset");

mybutton.addEventListener("click", () => {
	ctx.reset(); // clear the context!
	if (toggle) {
		drawSmile();
	} else {
		drawFrown();
	}
	toggle = !toggle;
});
