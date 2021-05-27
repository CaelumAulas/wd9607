import { getCartoesSalvosServidor } from "../services/CeepService.js";

const mural = document.querySelector('.mural');
const template = document.querySelector('#template-cartao');
let numeroCartao = 0;

window.addEventListener('load', async function() {
    const listaCartoes = await getCartoesSalvosServidor();
    listaCartoes.forEach(function(cartaoInfo) {
        adicionarCartao(cartaoInfo.conteudo, cartaoInfo.cor);
    });
});

/**
 * Cria um cartão com o conteúdo informado no mural
 * @param {string} conteudo     Texto a ser usado como conteúdo a ser mostrado no cartão
 * @param {string} cor          Cor a ser aplicada como background do cartão
 */
export function adicionarCartao(conteudo, cor = '')
{
    numeroCartao++;
    const cartao = template.content.querySelector('article').cloneNode(true);
    cartao.innerHTML = cartao.innerHTML.replaceAll('{{NUMERO_CARTAO}}', numeroCartao).replace('{{CONTEUDO_CARTAO}}', conteudo);
    cartao.style.backgroundColor = cor;
    mural.append(cartao);
}

/**
 * Retorna uma lista contendo objetos com o conteúdo e a cor de
 * cada cartão presente no mural da aplicação
 * @return {Array}
 */
export function getCartoes()
{
    const cartoes = mural.querySelectorAll('.cartao');
    const listaCartoes = Array.from(cartoes).map(function(cartao) {
        return {
            conteudo: cartao.querySelector('.cartao-conteudo').textContent,
            cor: cartao.style.backgroundColor
        }
    });
   
    return listaCartoes;
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
