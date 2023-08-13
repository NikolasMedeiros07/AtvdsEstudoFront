const bissexto = (ano)=>{
    return ((ano % 4 == 0 && !(ano % 100 == 0)) || ano % 400 == 0)
}

console.log(bissexto(2104))