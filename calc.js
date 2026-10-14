alert("Calculadora super útil e versátil \n 1.Soma \n 2.Subtração \n 3.multiplicação \n 4.divisão \n 5.potenciação \n 6.Raiz Quadrada")
let conta = prompt('Qual conta oce quer bro:')

if (conta == 1) {
    var numero1 = Number(prompt("Qual o primeiro numero:"))
    var numero2 = Number(prompt("Qual o segundo numero:"))
    alert(numero1 + numero2)
} else if (conta == 2) {
    var numero1 = Number(prompt("Qual o primeiro numero:"))
    var numero2 = Number(prompt("Qual o segundo numero:"))
    alert(numero1 - numero2)
} else if (conta == 3) {
    var numero1 = Number(prompt("Qual o primeiro numero:"))
    var numero2 = Number(prompt("Qual o segundo numero:"))
    alert(numero1 * numero2)
} else if (conta == 4) {
    var numero1 = Number(prompt("Qual o primeiro numero:"))
    var numero2 = Number(prompt("Qual o segundo numero:"))
    alert(numero1 / numero2)
} else if (conta == 5) {
    var numero1 = Number(prompt("Qual o primeiro numero:"))
    var numero2 = Number(prompt("Qual o segundo numero:"))
    alert(numero1 ** numero2)
} else if (conta == 6){
    var numeroSqrt = Number(prompt("Qual númeor você deseja adquirir a raiz quadrada de:"))
    var resposta = Math.sqrt(numeroSqrt)
    alert(resposta.toFixed(3))
} else {
    alert("Caracter inválido, verifique se os número colocados são equivalentes a alguma conta e verifique se não há nenhuma letra ou caracter especial em nenhum input")
}

alert("Calculadora super útil e versátil \n1. Soma \n2. Subtração \n3. Multiplicação \n4. Divisão \n5. Potenciação \n6. Raiz Quadrada");

let conta = Number(prompt("Qual conta você quer bro? (1 a 6):"));

// ================== VV Versão mais clean e funcional feito por AI VV ==============================
// usando switch
// function pedirDoisNumeros() {
//   const n1 = Number(prompt("Qual o primeiro número:"));
//   const n2 = Number(prompt("Qual o segundo número:"));
//   return [n1, n2];
// }

// switch (conta) {
//   case 1: {
//     const [n1, n2] = pedirDoisNumeros();
//     alert(n1 + n2);
//     break;
//   }
//   case 2: {
//     const [n1, n2] = pedirDoisNumeros();
//     alert(n1 - n2);
//     break;
//   }
//   case 3: {
//     const [n1, n2] = pedirDoisNumeros();
//     alert(n1 * n2);
//     break;
//   }
//   case 4: {
//     const [n1, n2] = pedirDoisNumeros();
//     alert(n2 !== 0 ? n1 / n2 : "Não é possível dividir por zero!");
//     break;
//   }
//   case 5: {
//     const [n1, n2] = pedirDoisNumeros();
//     alert(n1 ** n2);
//     break;
//   }
//   case 6: {
//     const numeroSqrt = Number(prompt("Qual número você deseja adquirir a raiz quadrada:"));
//     alert(Math.sqrt(numeroSqrt).toFixed(3));
//     break;
//   }
//   default:
//     alert("Caractere inválido, verifique se o número digitado corresponde a uma opção e se não há letras.");
// }