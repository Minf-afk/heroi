const { gets, print } = require("./funcoes-auxiliares2.js");

const n = gets();

let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < n; i++) {
  const numero = gets();
  if (numero % 2 === 0) {
    if (numero > maiorPar || maiorPar === null) {
      maiorPar = numero;
    }
  } else {
    if (menorImpar === null || numero < menorImpar) {
      menorImpar = numero;
    } 
  }
}

print(`O mairo número par é ${maiorPar}`);
print(`O menor número impar é ${menorImpar}`);
