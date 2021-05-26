import { adicionarCartao } from "./mural.js";

const btn = document.querySelector('#btnAjuda');
btn.onclick = async () => {
    const resposta = await fetch('http://wd47-ceep.herokuapp.com/get-instrucoes.php');
    const dados = await resposta.json();
    const mensagens = dados.instrucoes;

    for (let msg of mensagens) {
        adicionarCartao(msg.conteudo, msg.cor);
    }
}
