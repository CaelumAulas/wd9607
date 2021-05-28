import usuarioLogado from "../storage/loginUsuario.js";

/**
 * Retorna a lista de instruções de ajuda cadastradas no back-end da aplicação
 * @returns {Promise<Array>}
 */
export async function getInstrucoes()
{
    const resposta = await fetch('http://wd47-ceep.herokuapp.com/get-instrucoes.php');
    const dadosCarregados = await resposta.json();
    const listaMensagens = dadosCarregados.instrucoes;

    return listaMensagens;
}

/**
 * Salva a lista de cartões passada no servidor da aplicação
 * @param {Array} listaDeCartoes        Array contendo as informações de cada cartão
 * @return {Promise<string>}
 */
export async function salvarCartoesServidor( listaDeCartoes )
{
    const infoUsuario = {
        usuario: usuarioLogado,
        cartoes: listaDeCartoes
    }

    let url = 'http://wd47-ceep.herokuapp.com/salvar-cartoes.php';
    const resposta = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(infoUsuario)
    });

    const dadosRetornados = await resposta.json();
    if (dadosRetornados.quantidade == 1) {
        return 'Cartão salvo com sucesso!';
    }
    else {
        return dadosRetornados.quantidade + ' cartões salvos com sucesso!';
    }
}

/**
 * Retorna a lista de cartões salvos no servidor da aplicação
 * @returns {Promise<Array>}
 */
export async function getCartoesSalvosServidor()
{
    let usuario = usuarioLogado;
    let url = `http://wd47-ceep.herokuapp.com/get-cartoes.php?usuario=${usuario}`;

    const resposta = await fetch(url);
    const dadosUsuario = await resposta.json();

    // ?? -> Null Coalescing Operator
    return dadosUsuario.cartoes ?? [];
}