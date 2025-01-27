const { gets, print } = require("./funcoes-auxiliares.js");

const numeroSorteado = [];

for (let i = 0; i < 5; i++) {
  const numero = gets();
  numeroSorteado.push(numero);
}

let maiorValor = 0;

for (let i = 0; i < numeroSorteado.length; i++) {
  const numero = numeroSorteado[i];
  if (numero > maiorValor) {
    maiorValor = numero;
  }
}

print(maiorValor);
