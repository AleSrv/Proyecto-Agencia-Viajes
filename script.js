import { barcelona, roma, paris, londres } from "./ciudades.js";

//Obtener Elem del DOM (HTML)
let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");

console.log(enlaces);
// console.log(tituloElemento);
// console.log(subtituloElemento);
// console.log(parrafoElemento);

//AGREGAMOS UN EVENTO CLICK A CADA ENLACE <a>
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    //REMOVER CLASE ACTIVE
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });
    //
    //AGREGAGAR ACTIVE AL QUE CORRESPONDA
    this.classList.add("active");
    //
    //OBTENER EL CONTENIDO CORRESPONDIENTE SEGUN ENLACE
    let contenido = obtenerContenido(this.textContent);

    //MOSTRAR CONTENIDO EN EL DOM
    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = `SUPER OFERTA!!!<br> SOLO HOY: ${contenido.precio} €`;
  });
});

//FUNCION PARA TRAER LA INFO CORRECTA DE CIUDADES.JS

function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
