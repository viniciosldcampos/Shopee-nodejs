// Como o arquivo package.json está como o ESM a importação precisa do caminho colocando a extensão js no final. 
import * as cartService from "./Shopee/src/services/cart.js"
import createItem from "./Shopee/src/services/item.js"; 


// Vetor do carrinho de compras. 
const myCart = []; 
// Vetor da Lista de desejos. 
const myWhishList = [];

console.log("Welcome to the your Shopee!");

// Criação dos itens com o nome do produto, preço e a quantidade. 
// await usado para que haja uma espera para o item terminar de executar para continuar o código. Não executando tudo ao mesmo tempo.
const item1 = await createItem("Ferrari, 20.99, 1");
const item2 = await createItem("McLaren, 39.99, 3");

// Adicionando os itens abaixo no carrinho. 
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myWhishList, item3);

//  Removeu o item abaixo do carrinho.
// O vetor começa do zero, portanto, nesse caso ele vai excluir o item 2
await cartService.removeItem(myCart, 1);

// Exibição da mensagem com o nome do produto, quantidade e valor subtotal. 
await cartService.displaycart(myCart);

// // Deletou os itens abaixo no carrinho. 
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

// Calculo do item a partir da função de subtotal. 
await cartService.calculateTotal(myCart);

