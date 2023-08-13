const repetir = (obj, vezes) =>{ 
    const resultado = []
    for(let z=0; z<vezes; z++){
        resultado.push(obj)
    }
    return resultado
}
console.log(repetir("nikin",5))