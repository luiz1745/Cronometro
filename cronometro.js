// Define a data de destino
const targetDate = new Date("Feb 28, 2025 00:00:00").getTime();

// Atualiza o cronômetro a cada 1 segundo
let interval = setInterval(function() {
    // Pega a data e hora atual
    let now = new Date().getTime();
    
    // Calcula a diferença entre a data alvo e a data atual
    let distance = targetDate - now;
    
    // Calcula os dias, horas, minutos e segundos restantes
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe o cronômetro
    document.getElementById("time").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Se o tempo acabar, exibe uma mensagem
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("time").innerHTML = "O tempo acabou!";
    }
}, 1000);

