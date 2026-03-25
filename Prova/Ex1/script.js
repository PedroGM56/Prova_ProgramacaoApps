let lista = [];

function adicionar(){
    let nome = document.getElementById('nome');
    let preco = document.getElementById('preco');
    let qtd = document.getElementById('qtd');
    let button = document.getElementById('adicionar');

    let maisCaro = document.getElementById('maisCaro');
    let maiorQtd = document.getElementById('maiorQtd');
    let estoque = document.getElementById('estoque');

    if (nome.value=='' || preco.value=='' || qtd.value==''){
        alert('Preencha todos os campos');
    }

    else{
        let produto={
            nome: nome.value,
            preco: parseFloat(preco.value),
            qtd: parseInt(qtd.value)
        }

        lista.push(produto);            

    }

    caro = lista.reduce((a,b) => a.preco > b.preco ? a : b);
    maior = lista.reduce((a,b) => a.qtd > b.qtd ? a : b)
    soma = lista.reduce((acc, produto) => {
        return acc + produto.preco
    }, 0)
    maisCaro.innerText = caro.nome;
    maiorQtd.innerText = maior.nome;
    estoque.innerText = 'R$'+soma; 
    
    button.addEventListener('click', adicionar);

}

