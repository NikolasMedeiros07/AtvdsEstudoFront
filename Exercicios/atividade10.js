const simbolo = (vezes) =>{ 
    let resultado = ""
    for(let z=0; z<vezes; z++){
        resultado += "+"
    }
    return resultado
}
console.log(simbolo(6))