// Declaração dos valores
const menorValor = 1;
const maiorValor = 1000;

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;
const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

const buttonSearch = document.getElementById('input-validation');
const inputValue = document.getElementById('input-value-number');
const boxNumber = document.getElementById('box-number-secret');

// Gerando o numero aleatorio para ser encontrado
const numberVariavel = Math.floor((1000 + 1) * Math.random());
console.log(numberVariavel)

/*
Ao clicar no botão de validar, ele vai verificar se o número é igual o numero secreto.. A função que ira fazer isso é a "verificaNumeroCorretoOuIncorreto", caso esteja incorreto, vai apenas limpar o campo de digitação e o usuário continuará testando
*/
buttonSearch.addEventListener('click', () => {
    const resultado = parseInt(inputValue.value);
    verificarNumeroCorretoOuIncorreto(resultado);  
    inputValue.value = "";
})

/* Verificar se o numero digitado é igual ao número secreto, caso o número for igual : Mensagem dizendo que acertou, e aparecerá um botão dizendo se vc deseja jogar novamente
*/
function verificarNumeroCorretoOuIncorreto(resultado) {
    if (resultado === numberVariavel) {
        document.body.innerHTML = 
        `
        <div>
            <h1>Parabens, você acertou!</h1>
            <button type="button" class="button-game-again" id="button-again">Jogar novamente</button>
        </div>
        `
    } 
    if (verificaNumeroSeEMaiorOuMenor(resultado)) {
        boxNumber.innerHTML += 
        `
        <div>
            <h3>Número invalido! Digite um número entre ${menorValor} e ${maiorValor}</h3>            
        </div>
        `
    }
}

// Atualizar a pagina quando o usuario acertar o número
document.body.addEventListener('click', e => {
    if (e.target.id == 'button-again') {
        window.location.reload();
    }
})

function verificaNumeroSeEMaiorOuMenor(resultado) {
    return resultado > maiorValor || resultado < menorValor;
}