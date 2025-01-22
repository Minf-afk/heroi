let peso = 50.7;
let altura = 1.56;

let imc = peso / Math.pow(altura, 2); // Math.pow(altura, 2) = altura * altura

console.log(imc.toFixed(2));

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Sobrepeso");
} else if (imc >= 30 && imc < 35) {
  console.log("Obesidade grau 1");
} else if (imc >= 35 && imc < 40) {
  console.log("Obesidade grau 2");
} else if (imc >= 40) {
    console.log("Obesidade grau 3");
}
