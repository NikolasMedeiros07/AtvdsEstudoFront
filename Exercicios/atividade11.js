const total = (array) =>{
    let resultado = []
    resultado[0] = array.shift()
    resultado[1] = array.pop()
    return resultado
}

console.log(total([7,14,"olá",-100, "aplicativo", 16]))