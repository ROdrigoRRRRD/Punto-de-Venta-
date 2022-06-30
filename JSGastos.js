let pagos = document.getElementById("pagado");

function pagarGa() {
    localStorage.setItem("Gastos", 15000);
    var pagarGastos = [];
    pagarGastos.push("Gastos Pagados");
    pagos.innerHTML = pagarGastos.join();
}