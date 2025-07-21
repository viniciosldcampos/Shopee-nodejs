// CASOS DE USO DOS ITENS

// Criar itens com subtotal calculado
// async é usado na função 
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    }    
    // O subtotal é uma arrowfunction.
}

// O export default é usado quando tem apenas um item.
export default createItem;
