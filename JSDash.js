if (inicio == "0") {
    window.location.href = 'IniciarSe.html';
}
let ventas = document.getElementById("ventasI");

var añadirVentas = [];

var sum = parseInt(localStorage.getItem("cantidad"));

añadirVentas.push(sum);

ventas.innerHTML = añadirVentas.join();

let gastos = document.getElementById("gastosI")

var añadirGastos = [];

var gas = parseInt(localStorage.getItem("Gastos"));

añadirGastos.push(gas);

gastos.innerHTML = añadirGastos.join();

let inicio = localStorage.getItem("inicio");