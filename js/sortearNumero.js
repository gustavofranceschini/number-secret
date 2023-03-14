// Gerando o numero aleatorio para ser encontrado
const menorValor = 1;
const maiorValor = 1000;
const numberSecret = Math.floor(gerarNumeroAleatorio()); 


function gerarNumeroAleatorio(){
    return parseInt(Math.random() * (maiorValor + 1));
}

console.log(numberSecret);