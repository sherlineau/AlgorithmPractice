const list = [
    { name: 'white'},
    { name: 'red'},
    { name: 'black'}
  ]

  
console.log(list.sort((a, b) => (a.name > b.name) ? 1 : -1))
  