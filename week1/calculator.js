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

document.getElementById("sum").innerHTML = calculator.sum();
document.getElementById("mul").innerHTML = calculator.mul();
document.getElementById("sub").innerHTML = calculator.sub();
document.getElementById("div").innerHTML = calculator.div();
