let nota1 = 2;
let nota2 = 1;
let nota3 = 2;

let media = (nota1 + nota2 + nota3) / 3;

console.log(media, tofixed(2));

if (media < 5) {
  console.log("Reprovado");
} else if (media >= 5 && media < 7) {
  console.log("Recuperação");
} else {
  console.log("Passou de semestre !");
}
