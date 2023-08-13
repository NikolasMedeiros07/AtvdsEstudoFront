const filtrarArray = (array) =>{
    return array.filter((num) =>{
        if (typeof(num) === "number"){
            return num
        } 
    })
}


console.log(filtrarArray(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarArray(["a", "c"]))