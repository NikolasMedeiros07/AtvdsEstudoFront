function checkObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

const removerPropriedade = (a,b) =>{
    if (checkObject(a)){
        const copia = Object.assign({}, a)
        console.log(copia)
        delete copia[b]
        console.log(copia)
    }
}
removerPropriedade({a: 1, b: 2}, "a") 
removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao") 
    
