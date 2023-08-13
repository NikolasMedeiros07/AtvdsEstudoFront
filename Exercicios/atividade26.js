const removerVogais = (frase)=>{
    const array = frase.split("")
    return array.filter((num) =>{
        if (num == "a" || num == "e" || num == "i" || num == "o" || num == "u" ){}else{return num} 
    })
}
//function removerVogais(frase) {
//    return frase.replace(/[aeiou]/ig, '')
//    }
    
console.log(removerVogais("Cod3r").join(''))
console.log(removerVogais("Fundamentos").join(''))