document.getElementById('sim').addEventListener('click', function() {
    // Redireciona para outra página
    window.location.href = '/pix/pix.html'; // Substitua com o link desejado
});

document.getElementById('nao').addEventListener('click', function() {
    // Limitar o movimento do botão a uma área específica
    let alturaMaxima = 150;  // Limita o deslocamento vertical a 150px
    let larguraMaxima = 150; // Limita o deslocamento horizontal a 150px

    // Gera uma posição aleatória dentro do limite
    let novaPosicaoY = Math.random() * alturaMaxima; 
    let novaPosicaoX = Math.random() * larguraMaxima;

    // Aplica a nova posição ao botão "Não"
    document.getElementById('nao').style.transform = `translate(${novaPosicaoX}px, ${novaPosicaoY}px)`;
});