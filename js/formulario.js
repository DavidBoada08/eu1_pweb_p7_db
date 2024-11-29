console.log('formulario.js');

const cedula = document.getElementById('cedula');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const jsonOutput = document.getElementById('jsonOutput'); 

function guardarInformacion() {
    const datos = {
        cedula: cedula.value,
        nombre: nombre.value,
        apellido: apellido.value
    };

    const datosJSON = JSON.stringify(datos, null, 2); 
    jsonOutput.value = datosJSON; 
}


const guardarBtn = document.getElementById('guardarBtn');
guardarBtn.addEventListener('click', guardarInformacion);