const multiplicar = (x,y) =>{ 
    let total = 0
    for(let z=0; z<y; z++){
        total += x
    }
    return total
}
console.log(multiplicar(0,5))