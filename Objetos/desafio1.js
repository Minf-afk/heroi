class Carro {
  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }
  calcularGastoTotal(distancia, precoCombustivel) {
    return (distancia * this.gastoMedioPorKm) * precoCombustivel;
  }
}

const uno = new Carro("Fiat", "Preto", 1/12);

const distancia = 58;
const precoCombustivel = 5;

const gastoTotal = (uno.calcularGastoTotal(distancia, precoCombustivel));
console.log(gastoTotal.toFixed(2));
