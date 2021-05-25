// todo o código que tenha a ver com a tabela
const tabela = document.querySelector('#tabelaContatos');

export function adicionarLinha(nome, telefone) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
        <td>
            <button	class="btn btn-danger btn-sm">
                Excluir
            </button>
        </td>
    `;

    tabela.append(tr);
}

tabela.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-danger')) {
        event.target.closest('tr').remove();
    }
});