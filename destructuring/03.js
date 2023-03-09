function addressMaker(city, state){
    const newAddress= {city,state}
    console.log(newAddress)
  }
  addressMaker("Austin", "Texas")
  //challenge
  //destructuring 을 최대한 사용해서 다음 코드를 바꿔보기
  function addressMaker2(address) {
    const {city, state} = address
    const newAddress2 = {
      city,
      state,
      country: 'United States'
    }
    console.log(newAddress2.city, newAddress2.state, newAddress2.country)
  }
  addressMaker2({city:'Austin',state:'Texas'})
  