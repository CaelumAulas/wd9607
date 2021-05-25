const mural = document.querySelector('.mural');
const template = document.querySelector('#template-cartao');
let numeroCartao = 0;

/**
 * Cria um cartão com o conteúdo informado no mural
 * @param {string} conteudo     Texto a ser usado como conteúdo a ser mostrado no cartão
 */
export function adicionarCartao(conteudo)
{
    numeroCartao++;
    const cartao = template.content.querySelector('article').cloneNode(true);
    cartao.innerHTML = cartao.innerHTML.replaceAll('{{NUMERO_CARTAO}}', numeroCartao).replace('{{CONTEUDO_CARTAO}}', conteudo);
    mural.append(cartao);
}

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
