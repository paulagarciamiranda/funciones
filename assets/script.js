/*  Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función:


function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar); 

    
    Modifica el código anterior para poder pasarle un color como argumento a la
función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
párrafo se debe pasar amarillo como color*/

function pintar(event, color = "green") {
  event.target.style.backgroundColor = color;
}
const ele = document.getElementById("ele1");
pintar({ target: ele });
ele.addEventListener("click", function (event) {
  pintar(event, "yellow");
});
