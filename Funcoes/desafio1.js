function nota(nota1, nota2, nota3) {
  return nota1 + nota2 + nota3;
}

function media(nota1, nota2, nota3) {
  return nota(nota1, nota2, nota3) / 3;
}

function situacaoDoAluno(media) {
  if (media < 5) {
    console.log("Reprovado");
  } else if (media >= 5 && media < 7) {
    console.log("Recuperação");
  } else {
    console.log("Passou de semestre !");
  }
}

let nota1 = 2;
let nota2 = 1;
let nota3 = 2;
let mediaCalculada = media(nota1, nota2, nota3);
situacaoDoAluno(mediaCalculada);
