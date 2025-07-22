// Quais as ações do carrinho


// CASOS DE USO - Cada uma com uma função:

// Adicionar item do carrinho
// userCart é um vetor
// Push adiciona um elemento dentro do vetor
async function addItem(userCart, item) {
    userCart.push(item);
}

// Calcular o Total do carrinho
async function calculateTotal(userCart) {
    console.log("\nThe total purchase is:");

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nTotal: ${result}`);
}

// Deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1) {
        userCart.splice(index, 1);
    }
}

// Remover item do carrinho - Apenas diminuindo um item
async function removeItem(userCart, item) {
    // Encontrar o índice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    // Caso não encontre o item
    if(indexFound == -1) {
        console.log("item não encontrado");
        return;
    }
    // Caso o Item > 1 subtrair um item.
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }
    // Caso o item = 1 deletar o item. 
    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

// Função para exibir mensagem ao usuário
async function displaycart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | Quantidade: ${item.quantity} | Subtotal = ${item.subtotal()}`);
    });
}

// Exportando as funções desse arquivo:
export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displaycart
}

