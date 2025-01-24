function aplicarDesconto(preco, desconto) {
  return preco - preco * (desconto / 100);
}

function aplicarJuros(preco, juros) {
  return preco + preco * (juros / 100);
}

let preco = 100;
let formaDePagamento = 1;

if (formaDePagamento === 1) {
  console.log(aplicarDesconto(preco, 10));
} else if (formaDePagamento === 2) {
  console.log(aplicarDesconto(preco, 15));
} else if (formaDePagamento === 3) {
  console.log(preco);
} else if (formaDePagamento === 4) {
  console.log(aplicarJuros(preco, 10));
}
