const multa = require("readline-sync")

let veloc: number = parseFloat(multa.question("Escreva um numero "))

if(veloc> 80){
    let multa: number = (veloc - 80) *7
    console.log(`Voce foi multado em R$ ${multa}`)
}
else{
    console.log(`Dentro do limite. Sem multas!`)
}

