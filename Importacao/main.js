const { gets, print } = require("./funcoes-auxiliares.js");


for (let i = 0; i < 1; i++) {
  const mediaCalculada = 5;

  if (mediaCalculada <= 5) {
    print("REPROVADO");
  } else if (mediaCalculada <= 6 && mediaCalculada >= 7) {
    print("RECUPERAÇÃO");
  }
  else {
    print("APROVADO");
}
}
















//const numeroSorteado = [];

// for (let i = 0; i < 5; i++) {
//   const numero = gets();
//   numeroSorteado.push(numero);
// }

// let maiorValor = 0;

// for (let i = 0; i < numeroSorteado.length; i++) {
//   const numero = numeroSorteado[i];
//   if (numero > maiorValor) {
//     maiorValor = numero;
//   }
// }

// print(maiorValor
