const notas = [];

notas.push(10);
notas.push(8);
notas.push(6);
notas.push(4);
notas.push(2);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

const media = soma / notas.length;
console.log(media);