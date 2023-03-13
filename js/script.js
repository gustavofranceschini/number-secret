// Declaração dos valores
const menorValor = 1;
const maiorValor = 1000;

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;
const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;


const buttonSearch = document.getElementById('input-validation');
const inputValue = document.getElementById('input-value-number')

// Gerando o numero aleatorio para ser encontrado
const numberVariavel = Math.floor((1000 + 1) * Math.random());
console.log(numberVariavel)


buttonSearch.addEventListener('click', () => {
    const resultado = inputValue.value;
    verificarNumeroCorretoOuIncorreto(resultado);
    inputValue.value = "";
})

function verificarNumeroCorretoOuIncorreto(resultado) {
    if (resultado == numberVariavel) {
        document.body.innerHTML = 
        `
        <div>
            <h1>Parabens você acertou!</h1>
        </div>
        `
    } else {
        console.log('Numero errado')
    }
}
