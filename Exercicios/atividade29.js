const segundoMaior = (array) =>{
    var maior = 0
    var segundoMaior = 0
    array.forEach(num => {
        if(num > maior){
            maior = num
        }
    });
    array.forEach(num => {
        if(num > segundoMaior && num != maior){
            segundoMaior = num
        }
    });
    
    return segundoMaior
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))