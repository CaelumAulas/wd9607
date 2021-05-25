import { adicionarCartao } from "./mural.js";
import notificar from "./notificacao.js";

const formulario = document.querySelector('form');
const caixaTexto = formulario.querySelector('textarea');

formulario.addEventListener('submit', event => {
    event.preventDefault(); // bloqueia o recarregamento da página

    if (caixaTexto.value.trim() == '') {
        notificar("Por favor, preencha o campo corretamente!");
    }
    else {
        // criar um novo cartão no mural com o conteúdo do formulário
        adicionarCartao( caixaTexto.value.trim() );
        formulario.reset();
    }
});