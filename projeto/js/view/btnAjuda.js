import { getInstrucoes } from "../services/CeepService.js";
import { adicionarCartao } from "./mural.js";

const btn = document.querySelector('#btnAjuda');
btn.onclick = async () => {
    const mensagens = await getInstrucoes();

    for (let msg of mensagens) {
        adicionarCartao(msg.conteudo, msg.cor);
    }
}
