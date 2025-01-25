class Heroi {
  constructor(nome, idade, tipo, ataque) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque;
  }

  atacar() {
    console.log(`${this.tipo} atacou usando sua habilidade ${this.ataque}`);
  }
}

let heroi1 = new Heroi("Mateus", 23, "Guerreiro", "Espada");
let heroi2 = new Heroi("Icaro", 4, "Ninja", "Shuriken");
let heroi3 = new Heroi("Gabrielle", 25, "Mago", "Magia");
let heroi4 = new Heroi("Marcely", 11, "Monge", "Artes Marciais");

if (this.tipo == "Guerreiro") {
  this.ataque("usou a Espada");
} else if (this.tipo == "Mago") {
  this.ataque("usou Magia");
} else if (this.tipo == "Shuriken") {
  this.ataque("usou shuriken");
} else if (this.tipo == "Monge") {
  this.ataque("usou artes marciais");
}

console.log(`O ${heroi2.tipo} atacou usando ${heroi2.ataque}`);
