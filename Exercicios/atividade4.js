
const qualMes = (mesEscolhido) =>{
    let mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho','agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    if (mesEscolhido>=1 && mesEscolhido<=12){
        return mapeamento[mesEscolhido-1]
    } return "Digite um numero de mês valido"
    
}

console.log(qualMes(112))