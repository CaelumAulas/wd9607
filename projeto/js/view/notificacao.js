const divMsg = document.createElement('div');
divMsg.classList.add('formNovoCartao-msg');
divMsg.addEventListener('animationend', () => divMsg.remove());

/**
 * Função que exibe uma mensagem de notificação para o usuário
 * @param {string} msg      Mensagem a ser exibida pelo módulo de notificação
 */
export default function notificar(msg)
{
    divMsg.textContent = msg;
    document.body.append(divMsg);
}