let nomes = [
    "Andre",
    "Victor",
    "Bruna",
    "Fagner",
    "Laura",
    "Ana",
    "Micco",
    "Wendel",
    "Cabeca",
    "Wendel otario"
];

function pesquisarNome() {
    let nomePesquisa = document.getElementById('campoNome').value.toLowerCase().trim(); // Converte a entrada para minúsculas e remove espaços extras
    let itensLista = '';

    for (let indice in nomes) {
        let nome = nomes[indice];

        if (nome.toLowerCase() === nomePesquisa) { // Compara sem diferenciação de maiúsculas/minúsculas
            itensLista += `<li class="list-group-item"> ${nome} </li>`;
        }
    }

    if (itensLista === '') {
        itensLista = `<li class="list-group-item text-danger">Nome não encontrado</li>`;
    }

    document.getElementById('lista').innerHTML = itensLista;
}

function carregarNomes() {
    let itensLista = '';

    for (let indice in nomes) {
        let nome = nomes[indice];
        itensLista += `<li class="list-group-item"> ${nome} </li>`;
    }

    document.getElementById('lista').innerHTML = itensLista;
}