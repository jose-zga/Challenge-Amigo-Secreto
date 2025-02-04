// El principal objetivo de este desafío es fortalecer tus
//  habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//corrobora si la información proporcionada es un nombre correcto y lo agrega a la lista "amigos"
function agregarAmigo(){
    
    let inputNombre = document.getElementById("amigo").value; //obtiene el valor ingresado

    if(inputNombre == ""){ //comprueba que no sea un dato vacio
        alert("Escriba un nombre valido ")//si está vacio arroja una alerta
    }else{
        amigos.push(inputNombre); //si el nombre es valido, se agrega al array amigos
        document.getElementById("amigo").value = ""; // limpia el campo para ingresar un nuevo nombre
        console.log(amigos);
        actualizarListaAmigos(); //función para mostrar los nombres en la pantalla
    }
    
}

//Actualiza la lista de amigos
function actualizarListaAmigos (){
    let listaDeNombres = document.getElementById("listaAmigos");//se obtiene la lista en la que se va a trabajar en una variable
    listaDeNombres.innerHTML = ""; //borra la lista, por si quedó un nombre al actualizar

    for (let i = 0; i < amigos.length; i++) { //Es la forma de recorrer un array
        let item = document.createElement("li"); // con este metodo se crea un elemento de tipo <li>
        item.textContent = amigos[i]; //se asigna el contenido al elemento <li> creado
        listaDeNombres.appendChild(item); //Con este metodo se agrega el elemento <li> al elemento HTML <ul>
    }
}

// implementa función para sortear amigos
function sortearAmigo (){
    if(amigos.length <= 0){
        alert("Ingresa los nombres de los participantes"); // alerta si no hay datos en la lista
    }else{
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);// genera un numero aleatorio
        let busquedaEnAmigos = amigos[numeroAleatorio]; //localiza el nombre que corresponde al indice  del numero aleatorio
        document.getElementById("listaAmigos").style.display = "none";
        let amigoSecreto = document.getElementById("resultado"); //Se obtiene el valor de resultado del HTML
        amigoSecreto.innerHTML = `El amigo secreto es ${busquedaEnAmigos}`; //se muestra el mensaje con el amigo secreto

    }
}

