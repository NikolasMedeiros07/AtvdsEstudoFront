const produtos = [
    {nome: 'borracha', preco: 1000, fragil: true},
    {nome: 'notebook', preco: 2000, fragil: true},
    {nome: 'copo', preco: 20, fragil: false},
]

const todos = produtos.map(p => p.fragil).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador && atual
}, true)

const algum = produtos.map(p => p.fragil).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador || atual
}, true)

console.log(todos)
console.log(algum)
