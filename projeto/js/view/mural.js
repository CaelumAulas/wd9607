const mural = document.querySelector('.mural');

export function toggleLayout() {
    mural.classList.toggle('mural--linha');
}

// exclusão do cartão
mural.addEventListener('click', function(event) {
    if (event.target.classList.contains('opcoesDoCartao-remove')) {
        const cartao = event.target.closest('.cartao');
        cartao.classList.add('cartao--some');
        cartao.addEventListener('transitionend', () => cartao.remove());
    }
});

// mudança da cor do cartão
mural.addEventListener('change', function(event) {
    if (event.target.type == 'radio') {
        const cartao = event.target.closest('.cartao');
        cartao.style.backgroundColor = event.target.value;
    }
});

// mudança de cor via teclado
mural.addEventListener('keypress', function(event) {
    let isLabel = event.target.tagName == 'LABEL';
    let isTeclaCerta = event.key == 'Enter' || event.key == ' ';

    if (isLabel && isTeclaCerta) {
        event.target.click();
    }
});
