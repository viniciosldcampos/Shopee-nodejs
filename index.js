// Como o arquivo package.json está como o ESM a importação precisa do caminho colocando item.js. 
import createItem from "./Shopee/src/services/item.js"; 

const cart = [];

console.log("Welcome to the your Shopee!");

// Criação dos itens do carrinho com o preço e a quantidade. 
// await usado para que haja uma espera para o item terminar de executar para continuar o código. Não executando tudo ao mesmo tempo.
const item1 = await createItem("Ferrari, 20.99, 1");
const item2 = await createItem("McLaren, 39.99, 3");

// Calculo do item a partir da função de subtotal. 
console.log(item2.subtotal());

