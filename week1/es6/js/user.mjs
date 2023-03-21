export default class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

export function printName(User) {
	console.log(`User's name is ${User.name}`);
}

export function printAge(User) {
	console.log(`User is ${User.age} years old`);
}
