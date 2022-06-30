let nombre = document.getElementById("name");
let contraseña = document.getElementById("password");
let error = document.getElementById("error");

function enviarForm() {

    let nombreL = localStorage.getItem('nombre');
    let contraseñaL = localStorage.getItem('contraseña')

    var mensajesError = [];

    if (nombre.value != nombreL) {
        mensajesError.push("Tu nombre no coincide");
    }
    if (contraseña.value != contraseñaL) {
        mensajesError.push("Tu contraseña no coincide");
    }
    if (nombre.value != nombreL || contraseña.value != contraseñaL) {
        mensajesError.push("Vuelve a Ingresar los Datos");
    }

    error.innerHTML = mensajesError.join(", ");
    if (nombre.value == nombreL && contraseña.value == contraseñaL) {
        localStorage.setItem("Inicio", 1);
        window.location.href = 'Dash.html';
    }
    return false;
}