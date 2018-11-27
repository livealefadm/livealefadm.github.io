/*
    1. Selecionar 
*/
const valorInicial = document.querySelector("input[name=balance]");
const taxaDeJuros = document.querySelector("input[name=taxaDeJuros]");
const qMeses = document.querySelector("input[name=tempo-de-investimento");
const vector = document.querySelectorAll(".input");

/*
    Adicionar um evento a cada um dos campos e fazer os ca
*/
for(let i = 0; i < vector.length; i++){
    vector[i].addEventListener("change",() => {
        let montante = valorInicial.value * Math.pow(1 + (taxaDeJuros.value/100),qMeses.value);
        document.querySelector("span#value").innerHTML = montante.toFixed(2);   
    });
}