/** @type {IDBDatabase} */
let db;
const subscribers = [];

const requestDb = indexedDB.open('db_ceep_backup', 1);
requestDb.addEventListener('success', () => {
    db = requestDb.result;
    carregarCartoes();
});

/** 
 * O evento 'upgradeneeded' é disparado quando:
 * 1) O banco de dados é criado pela primeira vez OU
 * 2) Quando a versão do banco de dados é alterada 
*/
requestDb.addEventListener('upgradeneeded', () => {
    db = requestDb.result;
    db.createObjectStore('store_cartoes', { keyPath: 'id', autoIncrement: true })
});

/**
 * Salva os cartões do mural no banco de dados local do navegador
 * @param {Array} listaCartoes      Lista de Cartões para serem salvos
 * @return {Promise<string>}
 */
export function salvarCartoesStore( listaCartoes )
{
    return new Promise(function(resolve, reject) {
        const transaction = db.transaction('store_cartoes', 'readwrite');
        transaction.objectStore('store_cartoes').clear();

        for (let cartao of listaCartoes)
        {
            transaction.objectStore('store_cartoes').add(cartao);
        }

        transaction.oncomplete = () => resolve('Cartões salvos com sucesso na base de dados local!');
        transaction.onerror = () => reject('Erro ao salvar dados na base de dados local!');
    });
}

function carregarCartoes()
{
    const tx = db.transaction('store_cartoes');
    const request = tx.objectStore('store_cartoes').getAll();
    request.onsuccess = () => {
        const listaDeCartoes = request.result ?? [];
        subscribers.forEach(funcao => funcao(listaDeCartoes));
    }
}

export function IDBSubscribeOnLoadCartoes(funcaoCallback)
{
    subscribers.push(funcaoCallback);
}

export function excluirCartoesStore()
{
    return new Promise(function(resolve, reject) {
        const tx = db.transaction('store_cartoes', 'readwrite');
        tx.objectStore('store_cartoes').clear();
        tx.oncomplete = () => resolve('Cartões locais excluídos com sucesso!');
        tx.onerror = () => reject('Erro ao excluir cartões da base de dados local!');
    });
}