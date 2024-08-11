function pintarNegro(elementId, backgroundColor = 'black') {
    let elemento = document.querySelector('#' + elementId);
    elemento.addEventListener("click", function() {
      elemento.style.backgroundColor = backgroundColor;
    });
}

pintarNegro('blue');
pintarNegro('red');
pintarNegro('green');
pintarNegro('yellow');