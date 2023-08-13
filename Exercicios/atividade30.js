function media (array) {
    let soma = array.reduce((acumulador, elemento) => acumulador + elemento, 0);
    return soma/array.length
}

const recerberMelhorEstudante = (obj) =>{
    const melhorAluno = { nome: '', media: 0 }
    for (let aluno in obj) {
        const notaMedia = media(obj[aluno])
    
        if (notaMedia > melhorAluno.media) {
          melhorAluno.nome = aluno
          melhorAluno.media = notaMedia
        }
      }

      console.log (melhorAluno)
}


recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    }) // retornará { nome: "Mariana", media: 7.875 }
