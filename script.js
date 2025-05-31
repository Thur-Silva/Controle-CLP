document.addEventListener('DOMContentLoaded', () => {
    // Selects only elements with the 'menu-link' class
    const hoverLinks = document.querySelectorAll('.menu-link'); 

    hoverLinks.forEach(link => {
        const staticImg = link.querySelector('.static-img');
        const gifImg = link.querySelector('.gif-img');

        link.addEventListener('mouseenter', () => {
            if (staticImg && gifImg) {
                staticImg.style.display = 'none';
                gifImg.style.display = 'inline-block';
            }
        });

        link.addEventListener('mouseleave', () => {
            if (staticImg && gifImg) {
                staticImg.style.display = 'inline-block';
                gifImg.style.display = 'none';
            }
        });
    });

    
});


document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.anim-scroll');

    if (!animatedElements.length) {
        // console.log("Nenhum elemento com a classe 'anim-scroll' encontrado.");
        return;
    }

    const observerOptions = {
        root: null, // Observa em relação ao viewport
        rootMargin: '0px 0px -50px 0px', // Ativa um pouco antes de estar totalmente visível (50px do fundo)
        threshold: 0.1 // Pelo menos 10% do elemento visível
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Opcional: parar de observar depois que o elemento se torna visível
                // para a animação ocorrer apenas uma vez.
                observer.unobserve(entry.target); 
            }
            // else {
                // Opcional: remover a classe se sair da tela para re-animar
                // entry.target.classList.remove('is-visible');
            // }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Script para trocar imagem estática por GIF no header (se já não tiver um)
    const headerLinks = document.querySelectorAll('header a');
    headerLinks.forEach(link => {
        const staticImg = link.querySelector('.static-img');
        const gifImg = link.querySelector('.gif-img');

        if (staticImg && gifImg) {
            link.addEventListener('mouseenter', () => {
                staticImg.style.display = 'none';
                gifImg.style.display = 'inline-block';
            });
            link.addEventListener('mouseleave', () => {
                staticImg.style.display = 'inline-block';
                gifImg.style.display = 'none';
            });
        }
    });
});