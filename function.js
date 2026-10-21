// let numero = 5
// tabuada(numero)

// function tabuada(numero) {
//     for (let i = 1; i < 11; i++){
//         console.log(numero * i)
//     }
// }

let peso = parseFloat(prompt("Quanto q se pesa(em kg)"))
let altura = parseFloat(prompt("Qaul a sua Aultura(em m)"))
let imc = calcIMC(peso, altura)

function calcIMC(peso, altura) {
    return peso / altura ** 2
}

function classImc(imc) {
    if (imc < 18.5) {
        alert("Abaixo do peso")
    } else if (imc < 24.9) {
        alert("Peso regular")
    } else if (imc < 29.9) {
        alert("Excesso de peso")
    } else if (imc < 34.9) {
        alert("Obesidade Classe I")
    } else if (imc < 39.9) {
        alert("Obesidade Classe II")
    } else if (imc >= 40){
        alert("Obesidade Classe III")
    }
}

calcIMC(peso, altura)
classImc(imc)