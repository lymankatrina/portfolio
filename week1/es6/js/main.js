import * as Utils from "./utils.mjs";
import U, { printName, printAge } from "./user.mjs";

console.log(Utils.double(5));
console.log(Utils.name);

const user = new U("Bob", 11);
console.log(user);
printName(user);
printAge(user);
