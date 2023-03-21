let calculator = {
	sum() {
		return this.a + this.b;
	},

	mul() {
		return this.a * this.b;
	},

	sub() {
		return this.a - this.b;
	},

	div() {
		return this.a / this.b;
	},

	read() {
		this.a = +prompt("a?", 0);
		this.b = +prompt("b?", 0);
	},
};
calculator.read();
document.getElementById(
	"a"
).innerHTML = `Your first number is ${calculator["a"]}`;
document.getElementById(
	"b"
).innerHTML = `Your second number is ${calculator["b"]}`;

document.getElementById(
	"sum"
).innerHTML = `The Sum of your numbers is ${calculator.sum()}`;
document.getElementById(
	"mul"
).innerHTML = `The Product of your numbers is ${calculator.mul()}`;
document.getElementById(
	"sub"
).innerHTML = `The difference of your numbers is ${calculator.sub()}`;
document.getElementById(
	"div"
).innerHTML = `The quotient of your numbers is ${calculator.div()}`;
