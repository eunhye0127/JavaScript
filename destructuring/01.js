const player = {
  name: 'Lebrone James',
  club: 'LA Lakers',
  address:{
    city: 'Los Angeles'
  }
}
console.log(player.address.city)

const { name, club, address: {city}} = player
console.log(name,club,city) //destructuring

console.log(`${name} lives in ${city}!`) //template literal
