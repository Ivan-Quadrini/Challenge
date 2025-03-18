let listaAmigos = [];
let inputA = document.getElementById ("amigo");

let ulLiAmigos = document.getElementById ("listaAmigos");




function agregarAmigo(){

    if (!inputA.value){
        alert("ingrese un nombre");
    return;}

    listaAmigos.push(inputA.value);
    ulLiAmigos.innerHTML += `<li>${inputA.value}</li>`;
    inputA.value="";
}

function sorteoAmigo (){
    if (listaAmigos.length === 0) {
        alert("Agrega amigos antes de sortear.");
        return;
    }

    let indice = Math.floor(Math.random()* listaAmigos.length);
    sorteado.textContent =`Tu Amigo secreto es: ${listaAmigos[indice]}`;
}
