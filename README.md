## objetivo

Criar um carrinho de compras beado na Shopee, que armazene itens e faça o calculo de sub-itens automaticamente.

Dominio da aplicação: Carrinho de Compras

Entidades representadas: 
- Carrinho
- Item

## 🛒 Shopee-nodejs
Este é um projeto simples de simulação de um carrinho de compras usando Node.js com módulos ECMAScript (ESM). Ele implementa operações básicas como adicionar, remover, deletar e calcular o total de itens em um carrinho de compras, com suporte também para uma lista de desejos.

## ⚙️ Pré-requisitos
- Node.js instalado
- Terminal ou prompt de comando

## 📁 Estrutura do Projeto
Shopee-nodejs/
├── index.js                   # Arquivo principal da aplicação  
├── package.json               # Arquivo de configuração do projeto (com "type": "module")  
└── src/  
    └── services/  
        ├── cart.js            # Lógica de operações do carrinho  
        └── item.js            # Função de criação de itens  

## 💡 Exemplo de Saída
```
Welcome to the your Shopee!

Shopee cart list:
1. McLaren - R$ 39.99 | Quantidade: 3 | Subtotal = 119.97

The total purchase is:

Total: 119.97
```
## 🧑‍💻 Autor
Desenvolvido por Vinicios com base em um estudo de lógica com Node.js.