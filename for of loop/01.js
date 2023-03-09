let incomes = [3500,3700,4000]
let total = 0

for (const income of incomes) {
  console.log(income)
  total += income
}
console.log(total)

let fullName = 'Dylan Coding God Isreal'
for (const char of fullName) {
  console.log(char)
}

//challenge
const students = [
  { name: "John", city: "New York" },
  { name: "Peter", city: "Paris" },
  { name: "Kate", city: "Sindey" }
];
//Tom lives in Lisbon
//3개 출력하기
//template literal 사용하기]
for (const student of students) {
  console.log(`${student.name} lives in ${student.city}`);
}