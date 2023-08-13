const a = {nome: "nikolas"}
console.log(a)

const b = a
console.log(b)

b.nome = "thaisinha"
console.log(a)

let numero = 2
{
    let numero = 1
    console.log(numero)
}

console.log(numero)