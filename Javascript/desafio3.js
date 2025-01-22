let preco = 100;
let formaDePagamento = 'parcelado';

if (formaDePagamento === 'débito') {
  preco = preco - (preco * 0.1);
  console.log(`O valor do produto com desconto é R$ ${preco}`);
} else if (formaDePagamento === 'dinheiro') {
  preco = preco - (preco * 0.15);
  console.log(`O valor do produto com desconto é R$ ${preco}`);
} else if (formaDePagamento === 'cartão de crédito') {
  console.log(`O valor do produto é R$ ${preco}`);
} else if (formaDePagamento === 'parcelado') {
  preco = preco + (preco * 0.1);
  console.log(`O valor do produto com juros é R$ ${preco}`);
}