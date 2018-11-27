/*
    1. Selecionar 
*/
const valorInicial = document.querySelector("input[id=valorInicial]");
const taxaDeJuros = document.querySelector("input[id=taxaDeJuros]");
const qMeses = document.querySelector("input[id=qMeses]");
const vector = document.querySelectorAll(".calc");

/*
    Adicionar um evento a cada um dos campos e fazer os ca
*/
for(let i = 0; i < vector.length; i++){
    vector[i].addEventListener("change",() => {
        let montante = valorInicial.value * Math.pow(1 + (taxaDeJuros.value/100),qMeses.value);
        document.querySelector("h3.showValue").innerHTML = montante.toFixed(2);   
    });
}