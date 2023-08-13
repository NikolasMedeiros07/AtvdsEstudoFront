class Lancamento {
    constructor(nome = 'Genérico' , valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 4500)
const academia = new Lancamento('academia', -100)

const contas = new CicloFinanceiro(7, 2023)
contas.addLancamentos(salario, academia)

console.log(contas.sumario())