// JavaScript principal para la página web

function onReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
}

// Efecto de transición entre páginas
onReady(function() {
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

    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            document.body.style.opacity = '1';
        }
        scrollToHashTarget();
    });

    function scrollToHashTarget() {
        if (!window.location.hash) return;
        const target = document.querySelector(window.location.hash);
        if (target) {
            target.scrollIntoView({ block: 'start' });
        }
    }

    scrollToHashTarget();

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

                if (href.includes('colores.html')) {
                    sessionStorage.setItem(
                        'donagustin-colores-return',
                        'index.html#aberturas'
                    );
                }
                
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
onReady(function () {
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
onReady(function() {
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
onReady(function() {
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
onReady(function() {
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

// Carrusel de Testimonios
onReady(function() {
    if (typeof Swiper === 'undefined') return;
    if (!document.querySelector('.testimonios-carousel')) return;
    new Swiper('.testimonios-carousel', {
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true },
        pagination: { el: '.testimonios-pagination', clickable: true },
        navigation: {
            nextEl: '.testimonios-next',
            prevEl: '.testimonios-prev'
        },
        slidesPerView: 1,
        spaceBetween: 12,
        speed: 700,
        grabCursor: true,
        watchOverflow: true,
        breakpoints: {
            640: { slidesPerView: 1, spaceBetween: 14 },
            900: { slidesPerView: 2, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 24 }
        }
    });
});

// Modales de detalle (aberturas y corralón en home)
function initDetalleModal(config) {
    var section = document.getElementById(config.sectionId);
    var modal = document.getElementById(config.modalId);
    if (!section || !modal) return;

    var modalImg = document.getElementById(config.ids.img);
    var modalBadge = document.getElementById(config.ids.badge);
    var modalTitle = document.getElementById(config.ids.title);
    var modalDesc = document.getElementById(config.ids.desc);
    var modalFeatures = document.getElementById(config.ids.features);
    var modalWhatsapp = document.getElementById(config.ids.whatsapp);
    var lastFocused = null;

    function openModal(itemId) {
        var data = config.data[itemId];
        if (!data) return;

        lastFocused = document.activeElement;

        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.description;

        if (data.badge) {
            modalBadge.textContent = data.badge;
            modalBadge.className = 'abertura-modal-badge' + (data.badgeClass ? ' ' + data.badgeClass : '');
            modalBadge.hidden = false;
        } else {
            modalBadge.hidden = true;
        }

        modalFeatures.innerHTML = data.features.map(function(text) {
            return '<li><i class="fas fa-check-circle"></i><span>' + text + '</span></li>';
        }).join('');

        if (modalWhatsapp) {
            var msg = encodeURIComponent(config.whatsappMsg(data.title));
            modalWhatsapp.href = 'https://wa.me/5493435436131?text=' + msg;
        }

        modal.hidden = false;
        modal.setAttribute('aria-hidden', 'false');
        requestAnimationFrame(function() {
            modal.classList.add('is-open');
        });
        document.body.style.overflow = 'hidden';
        modal.querySelector('.abertura-modal-close').focus();
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        setTimeout(function() {
            modal.hidden = true;
            if (lastFocused && lastFocused.focus) lastFocused.focus();
        }, 300);
    }

    section.querySelectorAll(config.cardSelector).forEach(function(card) {
        card.addEventListener('click', function() {
            openModal(card.dataset[config.dataAttr]);
        });

        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(card.dataset[config.dataAttr]);
            }
        });
    });

    modal.querySelectorAll('[data-close-modal]').forEach(function(el) {
        el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
}

onReady(function() {
    initDetalleModal({
        sectionId: 'aberturas',
        modalId: 'aberturaModal',
        cardSelector: '.abertura-card[data-linea]',
        dataAttr: 'linea',
        ids: {
            img: 'aberturaModalImg',
            badge: 'aberturaModalBadge',
            title: 'aberturaModalTitle',
            desc: 'aberturaModalDesc',
            features: 'aberturaModalFeatures',
            whatsapp: 'aberturaModalWhatsapp'
        },
        whatsappMsg: function(title) {
            return 'Hola! Me interesa la ' + title + '. Quisiera más información.';
        },
        data: {
            a40: {
                title: 'Línea A40 New',
                badge: 'Ultra',
                badgeClass: 'badge-ultra',
                image: 'assets/images/a30_new.jpg',
                description: 'Nuestra línea de máximo rendimiento. Pensada para proyectos que exigen grandes vanos, excelente aislación térmica y acústica, con terminaciones de primer nivel.',
                features: [
                    'Máxima prestación en aluminio',
                    'Ideal para grandes dimensiones y proyectos exigentes',
                    'Aislación térmica y acústica superior',
                    'Compatible con DVH y herrajes de alta gama',
                    'Fabricación propia con control de calidad en planta'
                ]
            },
            a30: {
                title: 'Línea A30 New',
                badge: 'Premium',
                badgeClass: 'badge-premium',
                image: 'assets/images/a30_new.jpg',
                description: 'Equilibrio entre prestación y diseño. Una línea premium muy elegida para viviendas y local comercial que buscan calidad superior sin llegar al rango ultra.',
                features: [
                    'Alta prestación estructural',
                    'Permite aberturas de buen tamaño',
                    'Buena aislación térmica',
                    'Variedad de aperturas: batiente, corrediza, proyectante',
                    'Excelente relación calidad-prestación'
                ]
            },
            modena: {
                title: 'Línea Modena',
                badge: 'Recomendado',
                badgeClass: '',
                image: 'assets/images/modena.jpg',
                description: 'La opción más elegida por nuestros clientes. Doble contacto y muy buena hermeticidad, con un precio competitivo para obras residenciales.',
                features: [
                    'Sistema de doble contacto',
                    'Muy buena hermeticidad al viento y al agua',
                    'Excelente relación precio-calidad',
                    'Ideal para viviendas y refacciones',
                    'Disponible en múltiples tipos de apertura'
                ]
            },
            herrero: {
                title: 'Línea Herrero Pesado',
                badge: '',
                badgeClass: '',
                image: 'assets/images/herrero_pesado.JPG',
                description: 'Línea económica y robusta, clásica del mercado. Muy utilizada en construcción tradicional cuando se busca durabilidad y un presupuesto accesible.',
                features: [
                    'Opción económica y resistente',
                    'Perfil herrero clásico reforzado',
                    'Duradera y de fácil mantenimiento',
                    'Ideal para obras con presupuesto ajustado',
                    'Fabricación y colocación con nuestro equipo'
                ]
            }
        }
    });

    initDetalleModal({
        sectionId: 'corralon',
        modalId: 'corralonModal',
        cardSelector: '.corralon-card[data-categoria]',
        dataAttr: 'categoria',
        ids: {
            img: 'corralonModalImg',
            badge: 'corralonModalBadge',
            title: 'corralonModalTitle',
            desc: 'corralonModalDesc',
            features: 'corralonModalFeatures',
            whatsapp: 'corralonModalWhatsapp'
        },
        whatsappMsg: function(title) {
            return 'Hola! Me interesa consultar por ' + title + ' del corralón. Quisiera más información.';
        },
        data: {
            'obra-gruesa': {
                title: 'Obra Gruesa',
                badge: '',
                badgeClass: '',
                image: 'assets/images/materiales_obras_gruesa.jpg',
                description: 'Materiales para la estructura de tu obra: desde cimientos hasta muros portantes. Stock permanente y asesoramiento para calcular cantidades.',
                features: [
                    'Ladrillos, bloques y cerámicos estructurales',
                    'Cemento, cal, arena y áridos',
                    'Viguetas, bloques de hormigón y complementos',
                    'Presupuesto sin cargo',
                    'Envíos a gran parte de Entre Ríos'
                ]
            },
            'obra-fina': {
                title: 'Obra Fina',
                badge: '',
                badgeClass: '',
                image: 'assets/images/materiales_obras_fina.jpg',
                description: 'Todo para terminaciones interiores y exteriores: revestimientos, pinturas, pegamentos y productos de alta calidad para el acabado final.',
                features: [
                    'Cerámicos, porcelanatos y revestimientos',
                    'Pinturas, pastinas, selladores y fragües',
                    'Pegamentos y morteros de terminación',
                    'Marcas reconocidas del mercado',
                    'Asesoramiento para elegir el producto correcto'
                ]
            },
            hierros: {
                title: 'Hierros',
                badge: '',
                badgeClass: '',
                image: 'assets/images/materiales_hierro.jpg',
                description: 'Hierros y aceros para construcción: barras, mallas, alambres, chapas y perfiles. Ideal para estructuras, refuerzos y herrería.',
                features: [
                    'Hierro de construcción en distintos diámetros',
                    'Alambre, clavos y accesorios',
                    'Chapas y perfiles metálicos',
                    'Corte y asesoramiento en mostrador',
                    'Precios mayoristas y minoristas'
                ]
            },
            'perfil-c': {
                title: 'Perfil C',
                badge: 'Representantes',
                badgeClass: 'badge-featured',
                image: 'assets/images/perfil_c.jpg',
                description: 'Somos representantes directos de Perfil C. Precios de fábrica, stock permanente y entrega para obra y estructura metálica.',
                features: [
                    'Representantes oficiales',
                    'Perfiles C en múltiples medidas',
                    'Precio directo de fábrica',
                    'Stock permanente en depósito',
                    'Ideal para tinglados, galpones y estructuras'
                ]
            },
            malla: {
                title: 'Malla Electrosoldada',
                badge: 'Representantes',
                badgeClass: 'badge-featured',
                image: 'assets/images/malla_electrosoldada.jpg',
                description: 'Representantes directos de malla electrosoldada. Los mejores precios para losas, caminos, cerramientos y refuerzo de hormigón.',
                features: [
                    'Representantes directos',
                    'Distintas medidas y separaciones',
                    'Excelente relación precio-calidad',
                    'Ideal para losas y contrapisos',
                    'Envío coordinado según tu obra'
                ]
            }
        }
    });
});