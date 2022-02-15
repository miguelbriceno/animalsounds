//Funcion que agrega el sonido y lo reproduce al oprimi el botón
function reproducirSonido(boton, estado) {

  switch (boton) {
    case "Perro":
      var animal = new Audio("sound/dogSound.mp3");
      animal.play();
      break;

    case "Gato":
      var animal = new Audio("sound/catSound.mp3");
      animal.play();
      break;

    case "Abeja":
      var animal = new Audio("sound/beeSound.mp3");
      animal.play();
      break;

    case "Gallína":
      var animal = new Audio("sound/chickenSound.mp3");
      animal.play();
      break;

    case "Vaca":
      var animal = new Audio("sound/cowSound.mp3");
      animal.play();
      break;

    case "Caballo":
      var animal = new Audio("sound/horseSound.mp3");
      animal.play();
      break;

    case "Oveja":
      var animal = new Audio("sound/lambSound.mp3");
      animal.play();
      break;

    case "León":
      var animal = new Audio("sound/lionSound.mp3");
      animal.play();
      break;

    case "Mono":
      var animal = new Audio("sound/monkeySound.mp3");
      animal.play();
      break;

    case "Serpiente":
      var animal = new Audio("sound/snakeSound.mp3");
      animal.play();
      break;

    case "Batman":
      var animal = new Audio("sound/batman.mp3");
      animal.play();
      break;

    case "Spiderman":
      var animal = new Audio("sound/spiderman.mp3");
      animal.play();
      break;

    default:
      console.log("Error");
  }
}

//Funcion para animar el botón
function animaBoton(clase) {
  var botonOprimido = document.querySelector("." + clase);
  botonOprimido.classList.add("btnPresionado");
  setTimeout(function() {
    botonOprimido.classList.remove("btnPresionado");
  }, 100);
}

var reproduciendo = false;
//Añadir los EventListener y llamar a las otras funciones
for (var i = 0; i < document.getElementsByTagName("button").length; i++) {
  var arregloBotones = document.getElementsByTagName("button");
  arregloBotones[i].addEventListener("click", function() {
    var idBtnOprimido = this.innerHTML;
    var classBtnOprimido = this.classList[0];
    //Llamar a las otras funciones pasandoles el innerHTML del botón como identificador del botón oprimido.
    reproducirSonido(idBtnOprimido, reproduciendo);
    animaBoton(classBtnOprimido);
  });
}
