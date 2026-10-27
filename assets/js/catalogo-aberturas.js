/**
 * Catálogo de aberturas — Don Agustín
 *
 * CONVENCIÓN DE NOMBRES (sin espacios ni tildes, todo en minúsculas):
 *   categoria-subtipo-linea-color-01.webp
 *
 * Categorías (obligatorio, primer segmento):
 *   cerramiento | placa | mampara | porton | puerta | tapa
 *
 * Subtipos (segundo segmento):
 *   cerramiento → corrediza
 *   mampara     → corrediza | fija | box | abrir
 *   porton      → abrir | corredizo | levadizo
 *   puerta      → 25mm | herrero36 | modena | a30
 *   tapa        → churrasquera
 *   placa       → (opcional; puede ir directo a línea/color)
 *
 * Luego (opcionales, en cualquier orden relativo):
 *   linea: a30 | a40 | modena | herrero | herrero36 | 25mm
 *   color: blanco | negro | anodizadonatural | similmadera | …
 *   Combinados: color1-color2 → queda como color1+color2
 *     ej. similmadera-anodizadonatural | similmadera-negra
 *   número: 01, 02…
 *
 * Ejemplos:
 *   puerta-modena-anodizadonatural-1.webp
 *   puerta-modena-similmadera-negra-1.webp
 *   puerta-25mm-herrero-blanca-01.webp
 *   tapa-churrasquera-01.webp
 *
 * Fotos por carpeta:
 *   assets/images/catalogo/cerramientos/
 *   assets/images/catalogo/puertas-placas/
 *   assets/images/catalogo/mamparas/
 *   assets/images/catalogo/portones/
 *   assets/images/catalogo/puertas/
 *   assets/images/catalogo/tapas-churrasqueras/
 *
 * En CATALOGO_ARCHIVOS poné solo el nombre del archivo (la carpeta
 * se deduce de la categoría del nombre).
 */

const CATALOGO_ARCHIVOS = [
    // Cerramientos
    'cerramiento-corrediza-01.webp',
    'cerramiento-corrediza-02.webp',
    'cerramiento-corrediza-03.webp',
    'cerramiento-corrediza-04.webp',
    'cerramiento-corrediza-05.webp',
    'cerramiento-corrediza-06.webp',
    'cerramiento-corrediza-07.webp',
    'cerramiento-corrediza-08.webp',
    // Puertas 25mm herrero blanca
    'puerta-25mm-herrero-blanca-01.webp',
    'puerta-25mm-herrero-blanca-02.webp',
    'puerta-25mm-herrero-blanca-03.webp',
    'puerta-25mm-herrero-blanca-04.webp',
    'puerta-25mm-herrero-blanca-05.webp',
    // Puertas 36mm herrero blanca
    'puerta-36mm-herrero-blanca-01.webp',
    'puerta-36mm-herrero-blanca-02.webp',
    'puerta-36mm-herrero-blanca-03.webp',
    'puerta-36mm-herrero-blanca-04.webp',
    'puerta-36mm-herrero-blanca-05.webp',
    'puerta-36mm-herrero-blanca-06.webp',
    'puerta-36mm-herrero-blanca-07.webp',
    'puerta-36mm-herrero-blanca-08.webp',
    'puerta-36mm-herrero-blanca-09.webp',
    'puerta-36mm-herrero-blanca-10.webp',
    'puerta-36mm-herrero-blanca-11.webp',
    'puerta-36mm-herrero-blanca-12.webp',
    'puerta-36mm-herrero-blanca-13.webp',
    'puerta-36mm-herrero-blanca-14.webp',
    'puerta-36mm-herrero-blanca-15.webp',
    'puerta-36mm-herrero-blanca-16.webp',
    'puerta-36mm-herrero-blanca-17.webp',
    'puerta-36mm-herrero-blanca-18.webp',
    // Puertas 36mm herrero negra
    'puerta-36mm-herrero-negra-1.webp',
    'puerta-36mm-herrero-negra-2.webp',
    'puerta-36mm-herrero-negra-3.webp',
    'puerta-36mm-herrero-negra-4.webp',
    'puerta-36mm-herrero-negra-5.webp',
    'puerta-36mm-herrero-negra-6.webp',
    // Puertas 36mm herrero simil madera
    'puerta-36mm-herrero-similmadera-1.webp',
    'puerta-36mm-herrero-similmadera-2.webp',
    // Puertas Módena anodizado natural
    'puerta-modena-anodizadonatural-1.webp',
    'puerta-modena-anodizadonatural-2.webp',
    'puerta-modena-anodizadonatural-3.webp',
    'puerta-modena-anodizadonatural-4.webp',
    'puerta-modena-anodizadonatural-5.webp',
    'puerta-modena-anodizadonatural-6.webp',
    // Puertas Módena blanca
    'puerta-modena-blanca-1.webp',
    'puerta-modena-blanca-2.webp',
    'puerta-modena-blanca-3.webp',
    'puerta-modena-blanca-4.webp',
    // Puertas Módena simil madera
    'puerta-modena-similmadera-2.webp',
    'puerta-modena-similmadera-3.webp',
    'puerta-modena-similmadera-4.webp',
    'puerta-modena-similmadera-5.webp',
    'puerta-modena-similmadera-6.webp',
    // Puertas Módena combinadas
    'puerta-modena-similmadera-anodizadonatural-1.webp',
    'puerta-modena-similmadera-anodizadonatural-2.webp',
    'puerta-modena-similmadera-anodizadonatural-3.webp',
    'puerta-modena-similmadera-anodizadonatural-4.webp',
    'puerta-modena-similmadera-negra-1.webp',
    'puerta-modena-similmadera-negra-2.webp',
    // Portones de abrir
    'porton-abrir-blanca-1.webp',
    'porton-abrir-blanca-2.webp',
    'porton-abrir-blanca-3.webp',
    'porton-abrir-blanca-4.webp',
    'porton-abrir-blanca-5.webp',
    'porton-abrir-blanca-6.webp',
    'porton-abrir-negro-1.webp',
    // Portones corredizos
    'porton-corredizo-anodizadonatural-1.webp',
    'porton-corredizo-negro-1.webp',
    // Portones levadizos
    'porton-levadizo-anodizadonatural-1.webp',
    'porton-levadizo-blanca-2.webp',
    'porton-levadizo-blanca-3.webp',
    'porton-levadizo-negro-01.webp',
];

const CATALOGO_FOLDERS = {
    cerramiento: 'assets/images/catalogo/cerramientos/',
    placa: 'assets/images/catalogo/puertas-placas/',
    mampara: 'assets/images/catalogo/mamparas/',
    porton: 'assets/images/catalogo/portones/',
    puerta: 'assets/images/catalogo/puertas/',
    tapa: 'assets/images/catalogo/tapas-churrasqueras/'
};

const META = {
    cerramiento: {
        label: 'Cerramientos',
        icon: 'fa-border-all',
        subs: { corrediza: 'Corredizas' }
    },
    placa: {
        label: 'Puertas placas',
        icon: 'fa-door-closed',
        subs: {}
    },
    mampara: {
        label: 'Mamparas',
        icon: 'fa-shower',
        subs: {
            corrediza: 'Corredizas',
            fija: 'Fijas',
            box: 'Box',
            abrir: 'De abrir'
        }
    },
    porton: {
        label: 'Portones',
        icon: 'fa-warehouse',
        subs: {
            abrir: 'De abrir',
            corredizo: 'Corredizos',
            levadizo: 'Levadizos'
        }
    },
    puerta: {
        label: 'Puertas',
        icon: 'fa-door-open',
        subs: {
            '25mm': '25 mm',
            '36mm': 'Herrero 36 mm',
            herrero36: 'Herrero 36 mm',
            modena: 'Módena',
            a30: 'A30'
        }
    },
    tapa: {
        label: 'Tapas churrasqueras',
        icon: 'fa-fire',
        subs: { churrasquera: 'Churrasqueras' }
    }
};

const LINEA_LABELS = {
    a30: 'A30',
    a40: 'A40',
    modena: 'Módena',
    herrero: 'Herrero',
    herrero36: 'Herrero 36 mm',
    '25mm': '25 mm'
};

const COLOR_LABELS = {
    blanco: 'Blanco',
    blanca: 'Blanco',
    negro: 'Negro',
    negra: 'Negro',
    bronce: 'Bronce',
    natural: 'Natural',
    anodizado: 'Anodizado',
    anodizadonatural: 'Anodizado natural',
    gris: 'Gris',
    madera: 'Madera',
    similmadera: 'Simil madera',
    champagne: 'Champagne'
};

/** Normaliza variantes de género / alias al token canónico del filtro */
const COLOR_CANONICAL = {
    blanca: 'blanco',
    negra: 'negro'
};

const KNOWN_LINEAS = new Set(Object.keys(LINEA_LABELS));
const KNOWN_COLORES = new Set(Object.keys(COLOR_LABELS));

function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
}

function labelLinea(v) {
    return LINEA_LABELS[v] || String(v).toUpperCase();
}

function canonColor(p) {
    return COLOR_CANONICAL[p] || p;
}

function labelColor(v) {
    if (!v) return '';
    if (v.includes('+')) {
        return v.split('+').map((p) => COLOR_LABELS[p] || capitalize(p)).join(' + ');
    }
    return COLOR_LABELS[v] || capitalize(v);
}

function colorDotsHtml(colorKey) {
    const parts = String(colorKey).split('+').filter(Boolean);
    return parts.map((p) => `<span class="color-dot color-${p}" aria-hidden="true"></span>`).join('');
}

function singularCat(cat) {
    const map = {
        cerramiento: 'Cerramiento',
        placa: 'Puerta placa',
        mampara: 'Mampara',
        porton: 'Portón',
        puerta: 'Puerta',
        tapa: 'Tapa'
    };
    return map[cat] || capitalize(cat);
}

function parseFilename(filename) {
    const base = filename.replace(/\.[^.]+$/, '').toLowerCase();
    const parts = base.split('-').filter(Boolean);

    const categoria = parts[0] || 'otros';
    const folder = CATALOGO_FOLDERS[categoria] || 'assets/images/catalogo/';

    const item = {
        file: filename,
        src: folder + filename,
        categoria,
        subtipo: '',
        linea: '',
        color: '',
        titulo: ''
    };

    const catSubs = META[item.categoria]?.subs || {};
    let i = 1;
    const colores = [];

    if (parts[i] && catSubs[parts[i]]) {
        item.subtipo = parts[i];
        i += 1;
    }

    while (i < parts.length) {
        const p = parts[i];
        i += 1;
        if (/^\d+$/.test(p)) continue;
        if (KNOWN_COLORES.has(p)) {
            colores.push(canonColor(p));
            continue;
        }
        if (!item.linea && KNOWN_LINEAS.has(p)) {
            item.linea = p;
            continue;
        }
        if (!item.linea && !KNOWN_COLORES.has(p)) {
            item.linea = p;
            continue;
        }
        // Token desconocido al final: tratarlo como color
        colores.push(canonColor(p));
    }

    if (item.categoria === 'puerta' && item.subtipo && !item.linea) {
        item.linea = item.subtipo;
    }

    // Evitar que la línea se confunda con un color ya tomado como subtipo (modena, a30…)
    if (colores.length) {
        item.color = [...new Set(colores)].join('+');
    }

    item.titulo = buildTitle(item);
    return item;
}

function buildTitle(item) {
    const bits = [];

    if (item.categoria === 'puerta' && item.subtipo) {
        bits.push(META.puerta.subs[item.subtipo] || item.subtipo);
    } else if (item.subtipo && META[item.categoria]?.subs?.[item.subtipo]) {
        bits.push(META[item.categoria].subs[item.subtipo]);
    } else if (item.subtipo) {
        bits.push(capitalize(item.subtipo));
    }

    if (item.linea && item.linea !== item.subtipo) {
        bits.push(labelLinea(item.linea));
    }
    if (item.color) {
        bits.push(labelColor(item.color));
    }

    if (item.categoria === 'placa') {
        return bits.length ? `Puerta placa · ${bits.join(' · ')}` : 'Puerta placa';
    }
    return bits.length ? `${singularCat(item.categoria)} · ${bits.join(' · ')}` : singularCat(item.categoria);
}

const state = {
    categoria: '',
    subtipo: '',
    linea: '',
    color: '',
    items: []
};

function categoriesAvailable() {
    const catsInUse = new Set(state.items.map((i) => i.categoria));
    return Object.entries(META)
        .filter(([id]) => state.items.length === 0 || catsInUse.has(id))
        .map(([id, m]) => ({ id, label: m.label, icon: m.icon }));
}

function initCatalogo() {
    state.items = CATALOGO_ARCHIVOS.map(parseFilename);
    const cats = categoriesAvailable();
    if (cats.length && !cats.some((c) => c.id === state.categoria)) {
        state.categoria = cats[0].id;
    }
    renderCategoryFilters();
    renderSecondaryFilters();
    renderGrid();
    updateCount();
    bindLightbox();
}

function renderCategoryFilters() {
    const el = document.getElementById('catalogoFiltrosCat');
    if (!el) return;

    const list = categoriesAvailable();
    if (!list.length) {
        el.innerHTML = '';
        return;
    }

    if (!list.some((c) => c.id === state.categoria)) {
        state.categoria = list[0].id;
    }

    el.innerHTML = list.map((b) => `
        <button type="button" class="cat-filtro-btn${b.id === state.categoria ? ' active' : ''}" data-cat="${b.id}">
            <i class="fas ${b.icon}"></i>
            <span>${b.label}</span>
        </button>
    `).join('');

    el.querySelectorAll('.cat-filtro-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            state.categoria = btn.dataset.cat;
            state.subtipo = '';
            state.linea = '';
            state.color = '';
            el.querySelectorAll('.cat-filtro-btn').forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            renderSecondaryFilters();
            applyFilters();
        });
    });
}

function filteredByCategory() {
    return state.items.filter((i) => i.categoria === state.categoria);
}

function bindToggleFilter(buttons, getValue, setValue, onChange) {
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const value = btn.dataset.value;
            setValue(getValue() === value ? '' : value);
            buttons.forEach((b) => b.classList.toggle('active', b.dataset.value === getValue() && getValue() !== ''));
            onChange();
        });
    });
}

function renderSecondaryFilters() {
    const subWrap = document.getElementById('catalogoFiltrosSub');
    if (!subWrap) return;

    const pool = filteredByCategory();
    const subsMeta = META[state.categoria]?.subs || {};
    const subsPresent = [...new Set(pool.map((i) => i.subtipo).filter(Boolean))];

    let useKeys = [];
    if (state.items.length === 0) {
        useKeys = Object.keys(subsMeta);
    } else {
        useKeys = Object.keys(subsMeta).length
            ? Object.keys(subsMeta).filter((k) => subsPresent.includes(k))
            : subsPresent;
        if (!useKeys.length && subsPresent.length) useKeys = subsPresent;
    }

    if (useKeys.length <= 1) {
        subWrap.hidden = true;
        subWrap.innerHTML = '';
        state.subtipo = useKeys[0] || '';
    } else {
        if (state.subtipo && !useKeys.includes(state.subtipo)) state.subtipo = '';
        subWrap.hidden = false;
        subWrap.innerHTML = `
            <span class="filtro-grupo-label">Tipo</span>
            <div class="filtro-grupo-btns">
                ${useKeys.map((k) => `
                    <button type="button" class="sec-filtro-btn${state.subtipo === k ? ' active' : ''}" data-value="${k}">
                        ${subsMeta[k] || capitalize(k)}
                    </button>
                `).join('')}
            </div>
        `;
        bindToggleFilter(
            subWrap.querySelectorAll('.sec-filtro-btn'),
            () => state.subtipo,
            (v) => {
                state.subtipo = v;
                state.linea = '';
                state.color = '';
            },
            () => {
                renderLineaColorFilters();
                applyFilters();
            }
        );
    }

    renderLineaColorFilters();
}

function currentPool() {
    let list = filteredByCategory();
    if (state.subtipo) {
        list = list.filter((i) => i.subtipo === state.subtipo);
    }
    return list;
}

function renderLineaColorFilters() {
    const lineaWrap = document.getElementById('catalogoFiltrosLinea');
    const colorWrap = document.getElementById('catalogoFiltrosColor');
    if (!lineaWrap || !colorWrap) return;

    const pool = currentPool();
    const lineas = [...new Set(pool.map((i) => i.linea).filter(Boolean))].sort();
    const colores = [...new Set(pool.map((i) => i.color).filter(Boolean))].sort();

    if (lineas.length > 1) {
        if (state.linea && !lineas.includes(state.linea)) state.linea = '';
        lineaWrap.hidden = false;
        lineaWrap.innerHTML = `
            <span class="filtro-grupo-label">Línea</span>
            <div class="filtro-grupo-btns">
                ${lineas.map((l) => `
                    <button type="button" class="sec-filtro-btn${state.linea === l ? ' active' : ''}" data-value="${l}">${labelLinea(l)}</button>
                `).join('')}
            </div>
        `;
        bindToggleFilter(
            lineaWrap.querySelectorAll('.sec-filtro-btn'),
            () => state.linea,
            (v) => { state.linea = v; },
            applyFilters
        );
    } else {
        lineaWrap.hidden = true;
        lineaWrap.innerHTML = '';
        state.linea = '';
    }

    if (colores.length > 1) {
        if (state.color && !colores.includes(state.color)) state.color = '';
        colorWrap.hidden = false;
        colorWrap.innerHTML = `
            <span class="filtro-grupo-label">Color</span>
            <div class="filtro-grupo-btns">
                ${colores.map((c) => `
                    <button type="button" class="sec-filtro-btn${state.color === c ? ' active' : ''}" data-value="${c}">
                        ${colorDotsHtml(c)}
                        ${labelColor(c)}
                    </button>
                `).join('')}
            </div>
        `;
        bindToggleFilter(
            colorWrap.querySelectorAll('.sec-filtro-btn'),
            () => state.color,
            (v) => { state.color = v; },
            applyFilters
        );
    } else {
        colorWrap.hidden = true;
        colorWrap.innerHTML = '';
        state.color = '';
    }
}

function getVisibleItems() {
    return state.items.filter((i) => {
        if (i.categoria !== state.categoria) return false;
        if (state.subtipo && i.subtipo !== state.subtipo) return false;
        if (state.linea && i.linea !== state.linea) return false;
        if (state.color && i.color !== state.color) return false;
        return true;
    });
}

function applyFilters() {
    renderGrid();
    updateCount();
}

function escapeHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function escapeAttr(s) {
    return escapeHtml(s).replace(/'/g, '&#39;');
}

function renderGrid() {
    const grid = document.getElementById('catalogoGrid');
    const empty = document.getElementById('catalogoEmpty');
    if (!grid || !empty) return;

    if (state.items.length === 0) {
        grid.innerHTML = '';
        empty.hidden = false;
        empty.innerHTML = `
            <div class="catalogo-empty-inner">
                <i class="fas fa-images"></i>
                <h2>Catálogo en preparación</h2>
                <p>La estructura y los filtros ya están listos. Subí las fotos en la carpeta de su categoría
                (por ej. <code>assets/images/catalogo/cerramientos/</code>) con el nombre convencionado.</p>
                <p class="catalogo-empty-hint">Ejemplo: <code>cerramiento-corrediza-a30-blanco-01.webp</code></p>
            </div>
        `;
        return;
    }

    const visible = getVisibleItems();
    if (visible.length === 0) {
        grid.innerHTML = '';
        empty.hidden = false;
        empty.innerHTML = `
            <div class="catalogo-empty-inner">
                <i class="fas fa-filter"></i>
                <h2>Sin resultados</h2>
                <p>No hay productos con esa combinación de filtros. Probá otra categoría o color.</p>
            </div>
        `;
        return;
    }

    empty.hidden = true;
    grid.innerHTML = visible.map((item, idx) => `
        <article class="catalogo-card" style="animation-delay:${(idx % 12) * 0.04}s">
            <button type="button" class="catalogo-card-media" data-lightbox="${item.src}" data-title="${escapeAttr(item.titulo)}" aria-label="Ver ${escapeAttr(item.titulo)}">
                <img src="${item.src}" alt="${escapeAttr(item.titulo)}" loading="lazy" decoding="async" width="280" height="200">
            </button>
            <div class="catalogo-card-body">
                <h3 class="catalogo-card-title">${escapeHtml(item.titulo)}</h3>
                <div class="catalogo-card-tags">
                    ${item.categoria && META[item.categoria] ? `<span class="tag">${escapeHtml(META[item.categoria].label)}</span>` : ''}
                    ${item.linea ? `<span class="tag tag-linea">${escapeHtml(labelLinea(item.linea))}</span>` : ''}
                    ${item.color ? `<span class="tag tag-color">${colorDotsHtml(item.color)}${escapeHtml(labelColor(item.color))}</span>` : ''}
                </div>
            </div>
        </article>
    `).join('');
}

function updateCount() {
    const el = document.getElementById('catalogoCount');
    if (!el) return;
    if (state.items.length === 0) {
        el.textContent = 'Sin productos cargados todavía';
        return;
    }
    const n = getVisibleItems().length;
    el.textContent = n === 1 ? '1 producto' : `${n} productos`;
}

function bindLightbox() {
    const lb = document.getElementById('catalogoLightbox');
    if (!lb) return;
    const img = lb.querySelector('.lightbox-img');
    const caption = lb.querySelector('.lightbox-caption');

    document.getElementById('catalogoGrid')?.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-lightbox]');
        if (!btn) return;
        img.src = btn.dataset.lightbox;
        img.alt = btn.dataset.title || '';
        caption.textContent = btn.dataset.title || '';
        lb.hidden = false;
        lb.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });

    function closeLightbox() {
        lb.hidden = true;
        lb.setAttribute('aria-hidden', 'true');
        img.src = '';
        document.body.style.overflow = '';
    }

    lb.querySelectorAll('[data-close-lightbox]').forEach((el) => {
        el.addEventListener('click', closeLightbox);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lb.hidden) closeLightbox();
    });
}

document.addEventListener('DOMContentLoaded', initCatalogo);
