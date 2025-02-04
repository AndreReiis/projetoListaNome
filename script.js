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
]
function pesquisarNome(){
    let nomePesquisa = document.getElementById('campoNome').value 
    let itensLista = ''
    
    for(indece in nomes){
        let nome = nomes[indece]
        if( nomePesquisa == nome ){
            itensLista += `<li class="list-group-item"> ${nome} </li>`
        }
    }

    document.getElementById('lista').innerHTML = itensLista
}

function carregarNomes (){
    
    let itensLista = ''

    for(indece in nomes){

        let nome = nomes[indece]

        itensLista += `<li class="list-group-item"> ${nome} </li>`

    }
   
    document.getElementById('lista').innerHTML = itensLista

}