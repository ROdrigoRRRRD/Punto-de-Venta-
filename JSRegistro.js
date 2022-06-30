let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let edad = document.getElementById("edad");
let correo = document.getElementById("correoElectronico");
let sexos = document.getElementsByName('sexo');
let contraseña = document.getElementById("password");
let term = document.getElementById("termyCond");
let error = document.getElementById("error");

function enviarForm() {

    var mensajesError = [];

    for (i = 0; i < sexos.length; i++) {
        if (sexos[i].checked) {
            var sexo = sexos[i].value;
        }
    }

    if (nombre.value == null || nombre.value == "") {
        mensajesError.push("Ingresa tu nombre");
    }
    if (apellidos.value == null || apellidos.value == "") {
        mensajesError.push("Ingresa tu apellidos");
    }
    if (correo.value == null || correo.value == "") {
        mensajesError.push("Ingresa tu Correo");
    }
    if (edad.value == null || edad.value == "" || edad.value == undefined || edad.value < 18 || edad.value > 100) {
        mensajesError.push("Ingresa tu edad");
    }
    if (sexo == null || sexo == "" || sexo == undefined) {
        mensajesError.push("Ingresa tu sexo");
    }
    if (contraseña.value == null || contraseña.value == "") {
        mensajesError.push("Ingresa tu contraseña");
    }
    if (term.checked == false) {
        mensajesError.push("Acepte los terminos y condiciones");
    }

    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("apellidos", apellidos.value);
    localStorage.setItem("edad", edad.value);
    localStorage.setItem("sexo", sexo);
    localStorage.setItem("correo", correo.value);
    localStorage.setItem("contraseña", contraseña.value);
    localStorage.setItem("term", term.checked);



    error.innerHTML = mensajesError.join(", ");
    if (nombre.value != "" && apellidos.value != "" && correo.value != "" && edad.value != undefined && sexo != "" && sexo != undefined && contraseña.value != "" && term.checked == true) {
        window.location.href = 'IniciarSe.html';
    }
    return false;
}