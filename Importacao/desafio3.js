const { gets, print } = require("./funcoes-auxiliares3.js");

const valorSalario = gets();
const beneficio = gets();

function calcularDesconto(valor, desconto) {
  return valor * (desconto / 100);
}

function pegarAliquota(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5;
  } else if (salario >= 1101 && salario <= 2500) {
    return 10;
  } else {
    return 15;
  }
}

const aliquotaImposto = pegarAliquota(valorSalario);

const valorImposto = calcularDesconto(valorSalario, aliquotaImposto);

const valorATransferir = valorSalario - valorImposto + beneficio;

print(valorATransferir);
