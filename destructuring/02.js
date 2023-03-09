//challenge
const student = {
    name: 'Kyle',
    age: 24,
    projects:{
      diceGame: 'Two player dice game using JavaScript.'
    }
  }
  //template literal, destructuring 사용해서
  //"Kyle 은 24살이고 다이스게임(다이스게임설명)을 만들고 있습니다."
  //콘솔에 출력
  const{name,age,projects:{diceGame}}=student
  console.log(`${name}은 ${age}살이고 다이스게임(${diceGame})을 만들고 있습니다.`)
  
  let [firstName, middleNmae, lastName] = ['Dylan', 'Coding God', 'Isreal']
  lastName = 'Clements'
  console. log(lastName)
  