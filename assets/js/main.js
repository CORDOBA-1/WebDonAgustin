// JavaScript principal para la página web

// Efecto de transición entre páginas
document.addEventListener('DOMContentLoaded', function() {
    // Crear overlay de transición si no existe
    let transitionOverlay = document.querySelector('.page-transition');
    if (!transitionOverlay) {
        transitionOverlay = document.createElement('div');
        transitionOverlay.className = 'page-transition';
        document.body.appendChild(transitionOverlay);
    }

    // Aplicar fade in al cargar la página
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 10);

    // Función para verificar si un enlace va a otra página
    function isExternalPage(href) {
        if (!href) return false;
        // Si es solo un ancla (#), no es otra página
        if (href.startsWith('#')) return false;
        // Si contiene .html o es index.html, es otra página
        if (href.includes('.html') || href === 'index.html') return true;
        // Si es una URL completa diferente
        if (href.startsWith('http') && !href.includes(window.location.hostname)) return true;
        return false;
    }

    // Manejar clics en enlaces de navegación que van a otras páginas
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (isExternalPage(href)) {
                // Si el enlace tiene ancla, separar la URL y el ancla
                const [url, anchor] = href.split('#');
                
                e.preventDefault();
                
                // Activar overlay de transición
                transitionOverlay.classList.add('active');
                
                // Esperar y luego navegar
                setTimeout(() => {
                    if (anchor) {
                        window.location.href = url + '#' + anchor;
                    } else {
                        window.location.href = href;
                    }
                }, 400);
            }
        });
    });
});

// Efecto de scroll en la navegación y detección de sección activa
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    // Ocultar flecha de scroll cuando se hace scroll
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.classList.add('hidden');
        } else {
            scrollIndicator.classList.remove('hidden');
        }
    }
    
    // Detectar sección activa para el subrayado automático
    updateActiveNavLink();
});

// Scroll suave para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efectos de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar elementos para efectos de scroll
document.querySelectorAll('.section-text, .section-image, .contact-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Función para FAQ - Exactamente igual al archivo original
function toggleFAQ(element) {
    const item = element.closest('.faq-item');
    const wasActive = item.classList.contains('active');

    // Cerrar todos los items
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

    // Activar solo el clickeado si estaba cerrado
    if (!wasActive) {
        item.classList.add('active');
    }
}

// Sistema de categorías FAQ
document.addEventListener("DOMContentLoaded", function () {
    // Soporte para ambos selectores: .faq-tab (nuevo) y .faq-cat-btn (legacy)
    const categoryButtons = document.querySelectorAll(".faq-tab, .faq-cat-btn");
    const faqSections = document.querySelectorAll("#faq .faq-section");

    // Mostrar la primera categoría con animación
    if (faqSections.length > 0) {
        const firstSection = faqSections[0];
        setTimeout(() => {
            firstSection.classList.add("active");
        }, 100);
    }

    // Agregar event listeners a todas las preguntas FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            toggleFAQ(this);
        });
    });

    if (categoryButtons.length > 0 && faqSections.length > 0) {
        categoryButtons.forEach((button) => {
            button.addEventListener("click", () => {
                // Remover clase active de todos los botones
                categoryButtons.forEach((btn) => btn.classList.remove("active"));
                button.classList.add("active");

                // Mostrar la sección correspondiente
                const category = button.getAttribute("data-category");
                faqSections.forEach((section) => {
                    section.classList.remove("active");
                    if (section.id === category) {
                        section.classList.add("active");
                    }
                });

                // Cerrar todas las respuestas abiertas al cambiar de categoría
                document.querySelectorAll('.faq-item.active').forEach(item => {
                    item.classList.remove('active');
                });
            });
        });
    }
});

// Función para detectar la sección activa y aplicar subrayado
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Menú móvil hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.getElementById('navbar');
    const navMobile = document.querySelector('.nav-mobile');
    const navMobileLinks = document.querySelectorAll('.nav-mobile-link');
    
    if (navToggle) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navbar.classList.toggle('menu-open');
            document.body.style.overflow = navbar.classList.contains('menu-open') ? 'hidden' : '';
        });
    }
    
    // Cerrar menú al hacer clic en el fondo del menú móvil
    if (navMobile) {
        navMobile.addEventListener('click', function(e) {
            if (e.target === navMobile) {
                navbar.classList.remove('menu-open');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    navMobileLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navbar.classList.remove('menu-open');
            document.body.style.overflow = '';
        });
    });
    
    // Cerrar menú con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navbar.classList.contains('menu-open')) {
            navbar.classList.remove('menu-open');
            document.body.style.overflow = '';
        }
    });
});

// Función para hacer scroll a la siguiente sección
function scrollToNextSection() {
    const nextSection = document.getElementById('aberturas');
    if (nextSection) {
        nextSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Efecto parallax suave en el scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.section-image > img');
    
    parallax.forEach(img => {
        const speed = 0.5;
        img.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Sistema de filtrado genérico (para muebles y aberturas)
document.addEventListener('DOMContentLoaded', function() {
    // Filtrado para muebles
    const mueblesFiltros = document.querySelectorAll('.muebles-filtros .filtro-btn');
    const muebleCards = document.querySelectorAll('.mueble-card');
    
    if (mueblesFiltros.length > 0 && muebleCards.length > 0) {
        setupFilter(mueblesFiltros, muebleCards);
    }
    
    // Filtrado para proyectos de aberturas
    const proyectosFiltros = document.querySelectorAll('.proyectos-filtros .filtro-btn');
    const proyectoCards = document.querySelectorAll('.proyecto-card');
    
    if (proyectosFiltros.length > 0 && proyectoCards.length > 0) {
        setupFilter(proyectosFiltros, proyectoCards);
    }
    
    // Filtrado para productos del corralón
    const productosFiltros = document.querySelectorAll('.productos-filtros .filtro-btn');
    const productoCards = document.querySelectorAll('.producto-card');
    
    if (productosFiltros.length > 0 && productoCards.length > 0) {
        setupFilter(productosFiltros, productoCards);
    }
    
    // Función genérica de filtrado
    function setupFilter(buttons, cards) {
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Remover clase active de todos los botones
                buttons.forEach(btn => btn.classList.remove('active'));
                // Agregar clase active al botón clickeado
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Animar y filtrar las cards
                cards.forEach((card, index) => {
                    const category = card.getAttribute('data-category');
                    
                    // Primero aplicar fade out
                    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    
                    setTimeout(() => {
                        if (filterValue === 'todos' || category === filterValue) {
                            card.classList.remove('hidden');
                            // Aplicar animación escalonada
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, index % 6 * 50);
                        } else {
                            card.classList.add('hidden');
                        }
                    }, 300);
                });
            });
        });
    }
});

// Carrusel de Obras (imágenes WhatsApp)
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Swiper === 'undefined') return;
    if (!document.querySelector('.obras-carousel')) return;
    new Swiper('.obras-carousel', {
        loop: true,
        autoplay: { delay: 3500, disableOnInteraction: false },
        pagination: { el: '.obras-pagination', clickable: true },
        navigation: {
            nextEl: '.obras-next',
            prevEl: '.obras-prev'
        },
        effect: 'slide',
        speed: 600,
        grabCursor: true
    });
});