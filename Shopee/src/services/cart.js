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
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}

// Deletar item do carrinho
async function deleteItem(userCart, name) {

}

// Remover item do carrinho - Apenas diminuindo um item
async function removeItem(userCart, index) {
    
}

// Exportando as funções desse arquivo:
export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
}

