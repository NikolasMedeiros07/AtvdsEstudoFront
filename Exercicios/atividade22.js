const sorte = (numEscolhido)=>{
    let a = Math.floor(Math.random() * 10) + 1;
    if (a == numEscolhido){
        console.log("Parabéns! O número sorteado foi o " + a)
    }else{
        console.log("Que pena! O número sorteado foi o " + a)
    }
}

sorte(3)
sorte(10)
sorte(5)