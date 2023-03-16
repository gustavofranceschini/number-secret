let cont = 0;
const boxTentativas = document.getElementById('box-tentativas');

function numeroTentativas(){
    cont++;
    boxTentativas.innerHTML =
    `
    <h3 class="msg-tentativas">Tentativas <span>${cont}</span></h3>
    `
}