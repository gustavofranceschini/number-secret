const buttonSearch = document.getElementById('input-validation');
const inputValue = document.getElementById('input-value-number');
const boxError = document.getElementById('box-msg-error');
const inputNumerosTentativas = document.getElementById('number-tentativas');

buttonSearch.addEventListener('click', () => {
    const resultado = parseInt(inputValue.value);
    verificarNumeroCorretoOuIncorreto(resultado);  
    numeroTentativas();
    inputValue.value = "";
})

function verificarNumeroCorretoOuIncorreto(resultado) {
    const numberTesting = resultado;

    if (valorValidoOuInvalido(numberTesting)){
        boxError.innerHTML = 
        `
        <h3>Este valor é invalido! Digite apenas números!</h3>
        `
        return    
    }

    if (verificaSeValorEMaiorOuMenorDoQueOsParametros(numberTesting)) {
        boxError.innerHTML = 
        `
        <h3>Digite um número entre ${menorValor} e ${maiorValor}</h3>

        `
        return
    }

    if (numberTesting > numberSecret) {
        boxError.innerHTML =
        `
        <h3>O número secreto é menor do que <span class="s">${numberTesting}</span> <i class="fa-sharp fa-solid fa-arrow-down"></i></h3>

        `
    } else {
        boxError.innerHTML = 
        `
        <h3>O número secreto é maior do que <span class="s">${numberTesting}</span> <i class="fa-sharp fa-solid fa-arrow-up"></i></h3>

        `
    }

    if (numberTesting === numberSecret) {
        document.body.innerHTML = 
        `
        <div>
            <h1>Parabens, você acertou!</h1>
            <h2 class="sucess">O número secreto era: ${numberSecret}</h2>
            <button type="button" class="button-game-again" id="button-again">Jogar novamente</button>
        </div>
        `
    }    

}

function valorValidoOuInvalido(numberTesting) {
    return Number.isNaN(numberTesting);
}

function verificaSeValorEMaiorOuMenorDoQueOsParametros(numberTesting) {
    return numberTesting < menorValor || numberTesting > maiorValor;
}

// Atualizar a pagina quando o usuario acertar o número
document.body.addEventListener('click', e => {
    if (e.target.id == 'button-again') {
        window.location.reload();
    }
})