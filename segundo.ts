const entrada2 = require("readline-sync");

let numero1: number = parseFloat(entrada2.question("Digite um numero: "));
let numero2: number = parseFloat(entrada2.question("Digite um numero: "));

if(numero1 > numero2){
    console.log(`O numero ${numero1} é maior`)
}
else{
    console.log(`O numero ${numero2} é maior`)
}