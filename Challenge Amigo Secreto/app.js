// El principal objetivo de este desafío es fortalecer tus
//  habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//Esta función corrobora si la información proporcionada está vacia, si es así, arroja una alerta, si hay un nombre correcto lo agrega a la lista "amigos"
function agregarAmigo(){
    
    let inputNombre = document.getElementById("amigo").value;

    if(inputNombre == ""){
        alert("Escriba un nombre")
    }else{
        amigos.push(inputNombre);
        document.getElementById("amigo").value = "";
        console.log(amigos);
        actualizarListaAmigos();
    }
    
}

function actualizarListaAmigos (){
    let listaDeNombres = document.getElementById("listaAmigos");
    listaDeNombres.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaDeNombres.appendChild(item);
    }
}




agregarAmigo();
