// script.js

// Função para tocar o áudio
function tocarAudio() {
    var audio = document.getElementById('josukeAudio');
    if (audio.paused) { // Verifica se o áudio está pausado antes de tocar
        audio.play();
    }
}

// Adiciona o evento de mouseover no card
document.getElementById('card').addEventListener('mouseover', function() {
    console.log('Passou o mouse sobre o card'); // Para ver se o evento está funcionando
    tocarAudio(); // Chama a função para tocar o áudio
});
