const formulario = document.querySelector('form');
const caixaTexto = formulario.querySelector('textarea');

formulario.addEventListener('submit', event => {
    event.preventDefault(); // bloqueia o recarregamento da página

    if (caixaTexto.value.trim() == '') {
        const divMsg = document.createElement('div');
        divMsg.classList.add('formNovoCartao-msg');
        divMsg.textContent = "Por favor, preencha o campo corretamente!";
        formulario.append(divMsg);
        divMsg.addEventListener('animationend', () => divMsg.remove());
    }
    else {
        // criar um novo cartão no mural com o conteúdo do formulário
    }
});