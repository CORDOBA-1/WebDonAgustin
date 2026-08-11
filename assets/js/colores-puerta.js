/**
 * Explorador de colores y tipos de aberturas — colores.html
 */
(function() {
    const TIPOS = {
        batiente: {
            label: 'Batiente',
            desc: 'Puerta o ventana que abre hacia adentro o afuera sobre bisagras laterales.'
        },
        corrediza: {
            label: 'Corrediza',
            desc: 'Hojas que se deslizan sobre rieles. Ideal para optimizar espacio.'
        },
        proyectante: {
            label: 'Proyectante',
            desc: 'Abre desde la parte superior hacia afuera, ideal para ventilación controlada.'
        },
        porton: {
            label: 'Portón elevadizo',
            desc: 'La tapa se eleva desde abajo, basculando desde el borde superior. Ideal para cocheras y accesos.'
        },
        enrollable: {
            label: 'Cortina de enrollar',
            desc: 'Tablillas horizontales de aluminio que se enrollan en un cajón superior. Abrí y cerrá deslizando hacia arriba y abajo.'
        }
    };

    const section = document.getElementById('colores-puerta');
    const panel = document.getElementById('coloresPanel');
    const tipoDesc = document.getElementById('tipoDescripcion');
    const tipoActivo = document.getElementById('tipoActivo');
    const colorElegido = document.getElementById('colorElegido');
    const whatsapp = document.getElementById('coloresWhatsapp');

    if (!section || !panel) return;

    let tipoActual = 'batiente';
    let colorActual = 'Anodizado natural';

    function cerrarTodas() {
        section.querySelectorAll('.puerta-vista').forEach(function(v) {
            v.classList.remove('is-open');
            const trigger = v.querySelector('.puerta-trigger');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
    }

    function abrirVista(vista) {
        vista.classList.add('is-open');
        const trigger = vista.querySelector('.puerta-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'true');
    }

    function toggleVista(vista) {
        if (vista.classList.contains('is-open')) {
            cerrarTodas();
        } else {
            cerrarTodas();
            abrirVista(vista);
        }
    }

    function aplicarColor(color, dark, nombre, esMadera) {
        section.style.setProperty('--puerta-color', color);
        section.style.setProperty('--puerta-dark', dark);
        section.dataset.madera = esMadera ? 'true' : 'false';
        colorActual = nombre;
        if (colorElegido) colorElegido.textContent = nombre;
        actualizarWhatsapp();
    }

    function actualizarWhatsapp() {
        if (!whatsapp) return;
        const tipo = TIPOS[tipoActual].label.toLowerCase();
        const msg = encodeURIComponent(
            'Hola! Me interesa un presupuesto de abertura ' + tipo + ' en ' + colorActual + '.'
        );
        whatsapp.href = 'https://wa.me/5493435436131?text=' + msg;
    }

    // Triggers de apertura
    section.querySelectorAll('.puerta-trigger').forEach(function(trigger) {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const vista = trigger.closest('.puerta-vista');
            if (vista && vista.classList.contains('active')) {
                toggleVista(vista);
            }
        });
    });

    // Selector de tipo
    section.querySelectorAll('.tipo-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const tipo = btn.dataset.tipo;
            if (!TIPOS[tipo]) return;

            tipoActual = tipo;
            cerrarTodas();

            section.querySelectorAll('.tipo-btn').forEach(function(b) {
                b.classList.toggle('active', b === btn);
                b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
            });

            section.querySelectorAll('.puerta-vista').forEach(function(v) {
                const activo = v.dataset.tipo === tipo;
                v.classList.toggle('active', activo);
                v.hidden = !activo;
            });

            if (tipoDesc) tipoDesc.textContent = TIPOS[tipo].desc;
            if (tipoActivo) tipoActivo.textContent = TIPOS[tipo].label;
            actualizarWhatsapp();
        });
    });

    // Tabs anodizado / pintado
    section.querySelectorAll('.colores-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            const grupo = tab.dataset.tab;
            section.querySelectorAll('.colores-tab').forEach(function(t) {
                t.classList.toggle('active', t === tab);
                t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
            });
            section.querySelectorAll('.colores-grupo').forEach(function(g) {
                const activo = g.dataset.grupo === grupo;
                g.classList.toggle('active', activo);
                g.hidden = !activo;
            });
        });
    });

    // Muestras de color
    section.querySelectorAll('.color-muestra').forEach(function(muestra) {
        muestra.addEventListener('click', function(e) {
            e.stopPropagation();

            section.querySelectorAll('.color-muestra').forEach(function(m) {
                m.classList.remove('active');
            });
            muestra.classList.add('active');

            aplicarColor(
                muestra.dataset.color,
                muestra.dataset.dark,
                muestra.dataset.nombre,
                muestra.dataset.madera === 'true'
            );
        });
    });

    // Color inicial
    section.style.setProperty('--puerta-color', '#B8B8B8');
    section.style.setProperty('--puerta-dark', '#8E8E8E');
    actualizarWhatsapp();
})();
