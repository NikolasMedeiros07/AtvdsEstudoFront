const produtos = [
    {nome: 'borracja', preco: 1000, fragil: true},
    {nome: 'notebook', preco: 30, fragil: false},
    {nome: 'copo', preco: 20, fragil: true},
]

const apenasPreco = produtos => produtos.preco
const resultado = produtos.map(apenasPreco)
console.log(resultado)