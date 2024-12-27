document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const message = document.getElementById("message");
  
    // Mensagem ao clicar em "Sim"
    yesButton.addEventListener("click", () => {
      message.textContent =
        "Parabéns você fez uma ótima escolha! Quero que saiba que eu a considero uma cara serva de Deus, tão incrível em cada detalhe e admirável por seu esforço em tudo! Te amo amor. ❤️";
      message.style.display = "block"; // Mostra a mensagem
    });
  
    // Movimenta o botão "Não"
    function moveNoButton() {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
  
      const randomX = Math.random() * (viewportWidth - noButton.offsetWidth);
      const randomY = Math.random() * (viewportHeight - noButton.offsetHeight);
  
      noButton.style.position = "absolute";
      noButton.style.left = `${randomX}px`;
      noButton.style.top = `${randomY}px`;
    }
  
    // Evento para mover o botão ao passar o mouse ou clicar
    noButton.addEventListener("mouseenter", moveNoButton);
    noButton.addEventListener("click", moveNoButton);
  });
  