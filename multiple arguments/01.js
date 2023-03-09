function fnc(nums, num2) {
  console.log(nums, num2);
}
fnc(4, 5);

function fnc2(...nums) {
  console.log(nums);
}
fnc2(4, 5, 6, 7);

function fnc3(nums) {
  console.log(arguments);
}
fnc3(4, 5, 6, 7, 8);

//anonymous function
const lunchMenu = function () {
  return "I'm going to eat pizza for lunch";
};
//arrow function
const dinnerMenu = () => {
  return "I'm going to eat a burger for dinner";
};
console.log(dinnerMenu());

const dinnerMenu2 = () => "I'm going to eat a burger for dinner";
console.log(dinnerMenu2());

const dinnerMenu3 = (food) => `I'm going to eat a ${food} for dinner`;
console.log(dinnerMenu3("chicken"));

const dinnerMenu4 = (food) => `I'm going to eat a ${food} for dinner`;
console.log(dinnerMenu4("raw tuna"));

const dinnerMenu5 = (food = "burger") => `I'm going to eat a ${food} for dinner`;
console.log(dinnerMenu5());

