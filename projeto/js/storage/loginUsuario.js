import { excluirCartoesStore } from "./db.js";

let usuarioLogado = localStorage.getItem('CEEP_USUARIO_LOGADO');

while (!isEmail(usuarioLogado)) 
{
    usuarioLogado = prompt('Por favor, informe um nome de usuário válido (tem que ser um e-mail):');
    localStorage.setItem('CEEP_USUARIO_LOGADO', usuarioLogado);
}

function isEmail(email)
{
    const validadorEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/);
    return validadorEmail.test(email);
}

export async function logout()
{
    if (confirm('Ao deslogar, suas informações locais não serão mantidas. Deseja continuar?')) {
        await excluirCartoesStore();
        localStorage.removeItem('CEEP_USUARIO_LOGADO');
        window.location.reload();
    }
}

export default usuarioLogado;