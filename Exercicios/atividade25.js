const buscarPalavrasSemelhantes = (alvo, array)=>{
    return array.filter((num) =>{
        return num.includes(alvo) //ou usar startsWith
    })
}
console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]))

