//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let lista = [];

function adicionarAmigo() {

    let nomeAmigo = document.querySelector('#amigo').value;

    if(nomeAmigo == ''){
        alert('Por favor, insira um nome');
        return;
    }
    
    lista.push(nomeAmigo);

    console.log(lista);

    atualizarListaAmigosHtml();

    limparCampo();
}

function atualizarListaAmigosHtml(){

    let listaAmigos = document.querySelector('#listaAmigos');

    listaAmigos.innerHTML = '';

    for (let i = 0; i < lista.length; i++) {
        const amigo = lista[i];

        let li = document.createElement('li');
        li.innerHTML = amigo;

        listaAmigos.appendChild(li);
    }


}

function sortearAmigo() {
    let listaResultado = document.querySelector('#resultado');
    
    listaResultado.innerHTML = '';

    if(lista.length === 0){
        alert('Não há amigos para sortear')
        return
    }
    
    
    let indice = indiceAleatorio();

    let nomeSorteado = lista[indice];

    let li = document.createElement('li');

    li.innerHTML = nomeSorteado;

    listaResultado.appendChild(li);

    lista.splice(indice, 1);
    
    atualizarListaAmigosHtml();

}

function indiceAleatorio(){
    let a = Math.floor(Math.random() * lista.length);
    
    return a 
}

function limparCampo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}

