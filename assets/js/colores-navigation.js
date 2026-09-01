/**
 * Navegación atrás en colores.html — el botón del navegador debe volver
 * al inicio en la sección Aberturas, igual que el botón "Volver".
 */
(function() {
    var RETURN_KEY = 'donagustin-colores-return';
    var DEFAULT_RETURN = 'index.html#aberturas';

    function getReturnUrl() {
        return sessionStorage.getItem(RETURN_KEY) || DEFAULT_RETURN;
    }

    function setReturnUrl(url) {
        sessionStorage.setItem(RETURN_KEY, url);
    }

    if (!sessionStorage.getItem(RETURN_KEY) && document.referrer) {
        try {
            var ref = new URL(document.referrer);
            var fromSameSite = ref.origin === location.origin;
            var fromIndex = /index\.html$/i.test(ref.pathname) || /\/$/.test(ref.pathname);
            if (fromSameSite && fromIndex) {
                setReturnUrl(DEFAULT_RETURN);
            }
        } catch (e) {}
    }

    history.pushState({ coloresBack: true }, '', location.href);

    window.addEventListener('popstate', function() {
        location.replace(getReturnUrl());
    });

    var backBtn = document.querySelector('.colores-back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            sessionStorage.removeItem(RETURN_KEY);
        });
    }
})();
