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

rejeitada().catch( function() {
  console.log('Promisse rejeitada')
})

function promiseTrabalhada() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('Promisse tarbalhada')
     }, 5000)
    })
}

promiseTrabalhada().then( function(msg) {
  console.log(msg)
})

console.log('hello world3');
console.log('hello world4');
