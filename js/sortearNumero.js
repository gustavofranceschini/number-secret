// Gerando o numero aleatorio para ser encontrado
const menorValor = 1;
const maiorValor = 100;
const numberSecret = Math.floor(gerarNumeroAleatorio()); 

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * (maiorValor + 1));
}

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;
const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;