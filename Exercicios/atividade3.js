const salario = (horasTrabalhadas, valorHora) =>{
    let total = horasTrabalhadas*valorHora*0.7
    console.log(`Salário igual a ${total}`)
}

salario(150, 40.5)