
function escrevaMeuNome(nome) {
  return "Meu nome é " + nome;
}

escrevaMeuNome('Mateus');

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log(escrevaMeuNome('Mateus') + " sou maior de idade");
  } else {
    console.log("Menor de idade");
  }
}
verificarIdade(23);  