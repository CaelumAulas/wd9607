const btn = document.querySelector('#btnAjuda');
btn.onclick = () => {
    const mensagens = [
        "Bem-vindo(a) ao CEEP!",
        "Clique no botão '?' para Ajuda",
        "Clique no botão 'Linhas' para mudar a exibição dos cartões"
    ];

    for (let msg of mensagens)
    {
        alert(msg);
    }
}
