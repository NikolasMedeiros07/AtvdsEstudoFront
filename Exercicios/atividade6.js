const inverso = function(valor){
    if (typeof(valor) === "boolean"){
        return !valor
    }else if (typeof(valor) === "number"){
        if (valor == 0){
            return 0
        }return -valor
    }else{
        return "Só é permitido valor booleano ou numérico"
    }

}

console.log(inverso(false))
console.log(inverso(true))
console.log(inverso(0))
console.log(inverso(-111))
console.log(inverso(222))
console.log(inverso("6"))