const somarNumeros = (array)=>{
    let resultado = 0
    array.forEach(array => {
        resultado += array
    })
    return resultado
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))