const media = (array) => {
    let soma = array.reduce((acumulador, elemento) => acumulador + elemento, 0);
    return soma/array.length
}

console.log(media([1, 2, 3, 4, 5]))