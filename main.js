function llenarTablero(tamano){
    const tablero = document.querySelector(".canvas");
    limpiar();
    tablero.style.gridTemplateColumns = `repeat(${tamano} , 1fr)`;
    tablero.style.gridTemplateRows = `repeat(${tamano} , 1fr)`;

    for(let i = 0; i < (tamano * tamano ); i++){
        let item = document.createElement("div");
        item.className = 'cuadro';
        item.addEventListener('mouseover', colorear)
        item.style.backgroundColor = 'grey';
        tablero.insertAdjacentElement("beforeend", item);
    }
}

function elegirTamano(tamano){
    if(tamano <= 1000 && tamano >= 2){
        llenarTablero(tamano);
    }
    else alert("No se puede hacer un tablero con ese tamaño") 
}

function colorear(){
    this.style.backgroundColor = 'yellow';
}

function limpiar(){
    const tablero = document.querySelector(".canvas");
    const cuadros = tablero.querySelectorAll("div");
    cuadros.forEach((div) => div.style.backgroundColor = 'grey');

}