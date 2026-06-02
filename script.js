// =========================
// Agro Forte - script.js
// =========================

// Rolagem suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação ao aparecer na tela
const elementos = document.querySelectorAll('.section, .card');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar');
        }
    });
}, {
    threshold: 0.2
});

elementos.forEach((elemento) => {
    observador.observe(elemento);
});

// Mensagem de boas-vindas
window.addEventListener('load', () => {
    console.log('🌱 Bem-vindo ao Agro Forte, Futuro Sustentável!');
});

// Atualiza o ano automaticamente no rodapé
const footer = document.querySelector('footer p');

if (footer) {
    const anoAtual = new Date().getFullYear();

    footer.innerHTML =
        `©️ ${anoAtual} - Agro Forte, Futuro Sustentável | Projeto Educacional`;
}

// Efeito no botão principal
const botao = document.querySelector('.btn');

if (botao) {
    botao.addEventListener('mouseenter', () => {
        botao.style.transform = 'scale(1.05)';
    });

    botao.addEventListener('mouseleave', () => {
        botao.style.transform = 'scale(1)';
    });
}