class Pessoa {
  constructor(nome, idade, endereco, sexo, comidafavorita) {
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;
    this.sexo = sexo;
    this.comidafavorita = comidafavorita;
  }
  descrever() {
    console.log(`${this.nome} mora em ${this.endereco} tem ${this.idade} é do sexo
            ${this.sexo} e tem como comida favorita ${this.comidafavorita}`);
  }
}

const mateus = new Pessoa("Mateus", 23, "Av afonso zeca, 1134", "M", "Mocotó");
const maria = new Pessoa("Maria", 32, "Av afonso zeca, 1135", "F", "Buchada");
const marcely = new Pessoa(
  "Marcely",
  11,
  "Av afonso zeca, 1138",
  "F",
  "Strogonoff"
);
const gabrielle = new Pessoa(
  "Gabrielle",
  25,
  "Av afonso zeca, 1140",
  "F",
  "Parmegiana de frango"
);
const doralice = new Pessoa(
  "Doralice",
  55,
  "Av afonso zeca, 1512",
  "F",
  "Sarapatel"
);

mateus.descrever();
maria.descrever();
marcely.descrever();
gabrielle.descrever();
doralice.descrever();
