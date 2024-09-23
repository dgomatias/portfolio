document.addEventListener("DOMContentLoaded", function() {
    const textH1 = "Olá, eu sou o Diego";
    const textH2 = "Programador Front End & Designer";
    const speed = 110; // Velocidade de digitação (em ms)

    let indexH1 = 0;
    let indexH2 = 0;

    const typingH1 = document.getElementById('typing-h1');
    const typingH2 = document.getElementById('typing-h2');

    function typeH1() {
        if (indexH1 < textH1.length) {
            typingH1.textContent += textH1.charAt(indexH1);
            typingH1.classList.add("typing");
            indexH1++;
            setTimeout(typeH1, speed);
        } else {
            typingH1.classList.remove("typing");
            setTimeout(typeH2, 500); // Pausa antes de começar o h2
        }
    }

    function typeH2() {
        if (indexH2 < textH2.length) {
            typingH2.textContent += textH2.charAt(indexH2);
            typingH2.classList.add("typing");
            indexH2++;
            setTimeout(typeH2, speed);
        } else {
            typingH2.classList.remove("typing");
        }
    }

    typeH1(); // Iniciar a animação de digitação
});
