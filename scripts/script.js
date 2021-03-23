console.log('hello world');
console.log('hello world2');

function realizada() {
  return Promise.resolve()
}

function rejeitada() {
  return Promise.reject()
}

realizada().then( function() {
  console.log('Promisse realizada')
})

rejeitada().then( function() {
  console.log('Promisse rejeitada')
})


console.log('hello world3');
console.log('hello world4');
