let preco = 100;
let formaDePagamento = 1;

if (formaDePagamento === 1) {
  preco = preco - (preco * 0.1);
  console.log(`O valor do produto com desconto é R$ ${preco}`);
} else if (formaDePagamento === 2) {
  preco = preco - (preco * 0.15);
  console.log(`O valor do produto com desconto é R$ ${preco}`);
} else if (formaDePagamento === 3) {
  console.log(`O valor do produto é R$ ${preco}`);
} else if (formaDePagamento === 4) {
  preco = preco + (preco * 0.1);
  console.log(`O valor do produto com juros é R$ ${preco}`);
}