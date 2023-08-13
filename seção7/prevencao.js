const produto = Object.preventExtensions({ //n consegue adicionar
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

produto.nome = "borracha"
produto.descricao = 'borracha branca'//criando nova, n pode
delete produto.tag
console.log(produto)

const pessoa = {nome: 'Julinha', idade: 35}
Object.seal(pessoa) //n consegue deletar nem adcionar

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 31
console.log(pessoa)

const pessoa2 = {nome: 'Nikinho', idade: 21}
Object.freeze(pessoa2) //n consegue fazer nada após essa linha

pessoa2.sobrenome = 'Silva'
delete pessoa2.nome
pessoa2.idade = 31
console.log(pessoa2)