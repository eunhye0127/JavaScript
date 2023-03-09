let contacts = ["Mary", "Joel", "Danny"];
let personalFriends = ["David", ...contacts, "Lily"];

contacts.push("John");
console.log(personalFriends);

let person = {
  name: "Adam",
  age: 25,
  city: "Mancherset"
};

let employee = {
  ...person,
  salary: 50000,
  position: "SoftWare Developer"
};

console.log(employee);

//challange
const shoppingList = ["eggs", "milk", "butter"];
const actualList = ["cigarrete", "liquor", "beer", ...shoppingList];
