fetch('https://fakestoreapi.com/products/1')
  .then(res => res.json())
  .then(respJson => {
    console.log(respoJson)
    console.log(respJson.price)
  })