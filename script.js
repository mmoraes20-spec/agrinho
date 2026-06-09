// =========================
// Agro Forte - script.js (CORRIGIDO)
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

// CORREÇÃO: Garantir que os elementos apareçam mesmo se o Intersection Observer falhar
const elementos = document.querySelectorAll('.section, .card');

// Primeiro, verificar se há elementos para animar
if (elementos.length > 0) {
    
    // OPÇÃO 1: Usar Intersection Observer (moderno)
    if ('IntersectionObserver' in window) {
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('mostrar');
                    // Opcional: parar de observar após mostrar
                    // observador.unobserve(entrada.target);
                }
            });
        }, {
            threshold: 0.1,  // Reduzido de 0.2 para 0.1 (mais sensível)
            rootMargin: "0px 0px -50px 0px"  // Ajuste fino
        });

        elementos.forEach((elemento) => {
            observador.observe(elemento);
        });
    } 
    
    // OPÇÃO 2: Fallback para navegadores antigos - mostrar tudo imediatamente
    else {
        elementos.forEach((elemento) => {
            elemento.classList.add('mostrar');
        });
    }
    
    // CORREÇÃO EXTRA: Forçar exibição após 1 segundo (fallback de segurança)
    setTimeout(() => {
        elementos.forEach((elemento) => {
            // Se após 1 segundo ainda não tem a classe 'mostrar', força adicionar
            if (!elemento.classList.contains('mostrar')) {
                elemento.classList.add('mostrar');
                console.log('Fallback: forçando exibição de:', elemento);
            }
        });
    }, 1000);
    
} else {
    console.warn('Nenhum elemento .section ou .card encontrado para animar');
}

// CORREÇÃO: Também garantir que as seções principais sejam visíveis
// Isso resolve o caso específico das seções "Sobre" e "Sustentabilidade"
const todasSecoes = document.querySelectorAll('#sobre, #sustentabilidade');
if (todasSecoes.length > 0) {
    setTimeout(() => {
        todasSecoes.forEach(secao => {
            secao.classList.add('mostrar');
        });
    }, 500);
}

// Mensagem de boas-vindas
window.addEventListener('load', () => {
    console.log('🌱 Bem-vindo ao Agro Forte, Futuro Sustentável!');
    
    // Garantir que o hero também não tenha problemas de opacidade
    const hero = document.querySelector('.hero');
    if (hero) hero.style.opacity = '1';
});

// Atualiza o ano automaticamente no rodapé
const footer = document.querySelector('footer p');

if (footer) {
    const anoAtual = new Date().getFullYear();
    footer.innerHTML = `© ${anoAtual} - Agro Forte, Futuro Sustentável | Projeto Educacional`;
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