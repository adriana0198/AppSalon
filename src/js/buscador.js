document.addEventListener('DOMContentLoaded', function() {
    const fechaInput = document.querySelector('#fecha');
    const urlParams = new URLSearchParams(window.location.search);
    const fechaActual = new Date().toISOString().split('T')[0];
    const fechaSeleccionada = urlParams.get('fecha') || fechaActual;
    fechaInput.value = fechaSeleccionada;
    iniciarApp();
});
 
function iniciarApp() {
    buscarPorFecha();
}
 
function buscarPorFecha(){
    const fechaInput = document.querySelector('#fecha');
    fechaInput.addEventListener('input', function(e) {
        // e.preventDefault();
        const fechaSeleccionada = e.target.value;
        
        if(!fechaSeleccionada) {
            window.location = `admin`;
        } else {
            window.location = `admin?fecha=${fechaSeleccionada}`;
        }
    });
}