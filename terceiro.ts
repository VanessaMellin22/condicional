const ano = require("readline-sync")

let number: number = parseInt(ano.question("digite o ano:"))


 if(number % 4 == 0 && number % 100 != 0 || ano % 400 == 0){
console.log('é bissexto')
}
else{
    console.log("não é bissexto")
}
