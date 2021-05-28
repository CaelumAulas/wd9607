// importar todos os módulos que interagem com a interface HTML
import './view/btnAjuda.js';
import './view/btnMudaLayout.js';
import { getCartoes } from './view/mural.js';
import './view/formularioCartao.js';
import './view/busca.js';
import { sincronizar } from './view/btnSync.js';
import './view/btnLogout.js';
import { salvarCartoesStore } from './storage/db.js';

window.addEventListener('online', () => {
    sincronizar();
});

window.addEventListener('offline', () => {
    const cartoesMural = getCartoes();
    if (cartoesMural.length > 0) {
        salvarCartoesStore(cartoesMural);
    }
});

// registrando o service worker da aplicação
async function registrarServiceWorker()
{
    if ( 'serviceWorker' in navigator ) {
        const reg = await navigator.serviceWorker.register('/projeto/sw.js', {
            updateViaCache: "none"
        });

        console.log('Service worker registrado: ', reg);
    }
}

registrarServiceWorker();