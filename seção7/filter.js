const produtos = [
    {nome: 'borracha', preco: 1000, fragil: true},
    {nome: 'notebook', preco: 2000, fragil: true},
    {nome: 'copo', preco: 20, fragil: true},
]


console.log(produtos.filter(function(p){
    return (p.preco > 500 && p.fragil===true)
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))
