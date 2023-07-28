const entrada = require("readline-sync")

let numero: number = parseFloat(entrada.question("Escreva um numero: "))

if(numero<0){
    console.log("Negativo")
}
else if(numero>0){
    console.log("Positivo")
}
else{
    console.log("Zero")
}