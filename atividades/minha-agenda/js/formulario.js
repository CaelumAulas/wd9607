import { adicionarLinha } from "./tabelaContatos.js";

// todo o código que tenha a ver com o gerenciamento do formulário
const formulario = document.querySelector('#formCadastro');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputNome = formulario.querySelector('#inputNome');
    const inputTel = formulario.querySelector('#inputTelefone');

    if (inputNome.value.trim() == '') {
        alert(inputNome.dataset.msg);
    }
    else if (inputTel.value.trim() == '') {
        alert(inputTel.dataset.msg);
    }
    else {
        // cadastrar o contato na tabela
        let nome = inputNome.value;
        let tel = inputTel.value;

        adicionarLinha(nome, tel);
        formulario.reset();
    }
});