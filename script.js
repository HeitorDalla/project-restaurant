"use strict";

let total = 0; // Total do pedido
const listaPedido = document.querySelector("#lista-pedido");
const totalElemento = document.querySelector("#total");

// Funcao para criar o li dentro do ul
function newElement () {
    const itemPedido = document.createElement("li");
    itemPedido.setAttribute("class", "item");
    return itemPedido;
};

const buttons = document.querySelectorAll(".buttons"); // Peguei todos os buttons do código

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const divPai = button.parentElement; // Pega o pai do elemento botao

            const nome = divPai.querySelector("h2").textContent; // Pega o texto contido dentro do h2

            const preco = parseFloat(divPai.querySelector(".preco").textContent.replace("R$", ""));

            const novoElemento = newElement(); // Criando o li dinamicamente

            novoElemento.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
            listaPedido.appendChild(novoElemento); // Adiciona na pagina html

            total += preco; // Vai somar a cada produto que eu coloco em pedidos

            totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
    })
});

// Ação para o botao finalizar
const finalizarPedido = document.querySelector("#finalizarPedido");
finalizarPedido.addEventListener("click", () => {
    alert("Você finalizou o seu pedido!");
    listaPedido.innerHTML = ''; // Limpa o html

    total = 0; // Limpa o valor total

    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
});

