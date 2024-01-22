let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero! en ${intentos} ${
        intentos == 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del Numero Secreto");
  asignarTextoElemento("p",`Indica un numero del ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //Limpiar la caja
  limpiarCaja();
  //Indicar mensaje de intervalo de numeros
  //Generar Numero aleatorio
  //Inicializar el numero de intentos
  condicionesIniciales();
  //Deshabilitar el boton de neuvo juego
   document.getElementById("reiniciar").setAttribute('disabled', "true");
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * 10)+1;
  //Si ya sorteamos todos los numero
  if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
  }else{
    //Si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
    }else{
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

condicionesIniciales(); 
 
