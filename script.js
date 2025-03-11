"use stict";

document.querySelector("buttonContatos").addEventListener("click", (evento) => {
    evento.preventDefault();
    const containerRodape = document.querySelector("#rodape");
    containerRodape.scrollIntoView({ behavior: "smooth" });
});