const fabricantes = ["Mercedes", "Audi", "Toyota"]

function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach((a,b) => {
    console.log(a ,b)
})