const objetoParaArray = (obj) =>{
    console.log(Object.entries(obj))
}

objetoParaArray({
    codigo: 11111,
    preco: 12000
    }) // irá retornar [["codigo", 11111], ["preco", 12000]]
objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]