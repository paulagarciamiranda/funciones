// DEFINIENDO EL EVENTO

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    pintar("pink");
  } else if (event.key === "s" || event.key === "S") {
    pintar("orange");
  } else if (event.key === "d" || event.key === "D") {
    pintar("lightblue");
  } else if (event.key === "q" || event.key === "Q") {
    crearElemento("purple");
  } else if (event.key === "w" || event.key === "W") {
    crearElemento("grey");
  } else if (event.key === "e" || event.key === "E") {
    crearElemento("brown");
  }
});

// DEFINIENDO LA FUNCIÓN CAMBIAR COLOR

function pintar(backgroundColor) {
  let key = document.getElementById("key");
  key.style.backgroundColor = backgroundColor;
}


// DEFINIENDO LA FUNCIÓN CREAR NUEVO DIV DE COLOR ESPECÍFICO

function crearElemento(backgroundColor) {
  let key = document.getElementById("key");
  let nuevoElemento = document.createElement("div");
  nuevoElemento.style.backgroundColor = backgroundColor;
  nuevoElemento.style.width = "200px";
  nuevoElemento.style.height = "200px";
  nuevoElemento.style.marginLeft = "200px";
  key.appendChild(nuevoElemento);
}
