// guardar a referência da caixa de busca
const inputBusca = document.querySelector('#busca');
inputBusca.addEventListener('input', function() {
    let termo = inputBusca.value.trim();
    const buscaTermo = new RegExp(termo, 'i');
    const cartoes = document.querySelectorAll('.mural .cartao');
    cartoes.forEach(cartao => cartao.style.display = '');

    if (termo)
    {
        for (let cartao of cartoes) 
        {
            let textoCartao = cartao.querySelector('.cartao-conteudo').textContent;
            if (!buscaTermo.test(textoCartao)) {
                cartao.style.display = 'none';
            }
        }
    }
});