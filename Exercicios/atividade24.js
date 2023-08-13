const contarCaractere = (alvo, frase)=>{
    const array = frase.split("")
    return array.filter((num) =>{
        if (num === alvo){
            return num
        } 
    })
}
console.log(contarCaractere("r", "A sorte favorece os audazes").length)
console.log(contarCaractere("c", "Conhece-te a ti mesmo").length)

