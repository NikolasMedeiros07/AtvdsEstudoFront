const filtrarPorQuantidadeDeDigitos = (array, quantidadeLetras)=>{
    let total = []
    array.forEach(num => {
        if (num.toString().length == quantidadeLetras){
            total.push(num)  
        }
    });
    return total
}
console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))
