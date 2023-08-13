const pessoa ={
    nome: 'nikin',
    idade: 21,
    peso: 100
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.defineProperty(pessoa, 'dataNascimento',{ //vou ter mais controle da variavel
    enumerable: false,
    writable: false,
    value: '15/09/2001'
})

pessoa.dataNascimento = '12/05/1998'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))