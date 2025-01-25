class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }   
}

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho que ${p2.nome}`);
  } else if (p1.idade < p2.idade) {
    console.log(`${p1.nome} é mais novo que ${p2.nome}`);
  } else {
    console.log(`${p1.nome} tem a mesma idade de ${p2.nome}`);
  }
}

const mateus = new Pessoa('Mateus', 23);  
const maria = new Pessoa('Maria', 32);

compararPessoas(mateus, maria); // Mateus é mais novo que Maria
