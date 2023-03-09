import { data } from "./example";
let updatedData = data;
updatedData.push(5);
console.log(updatedData);

//challage
//두 수를 더해서 리턴하는 add라는 함수를 다른 파일에다가 만들고
//index.js 에서 호출하여 사용해보기기
import { add } from "./example";
console.log(add(1, 4));

import { Animal } from "./Animal";
let dog = new Animal("Dog", 4)
console.log(dog.metaData)
dog.makeNoise()
console.log(Animal.return10())

import { Cat } from "./Animal";

let cat = new Cat("Cat", 4);
console.log(cat.makeNoise());
