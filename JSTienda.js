let producto = document.getElementById("produc");
let error = document.getElementById("error");
let activos = document.getElementById("lista");
let totales = document.getElementById("total");

function save() {
    var mensajesError = [];
    var añadirProduc = [];
    var igual = parseInt(localStorage.getItem("cantidad"));
    if (igual == null) {
        igual = 0;
    }
    if (producto.value == "1321124161") {
        añadirProduc.push("Aceite");
        igual = igual + 46;
        localStorage.setItem("cantidad", igual);
    }
    if (producto.value == "1321124162") {
        añadirProduc.push("Café");
        igual = igual + 90;
        localStorage.setItem("cantidad", igual);
    }
    if (producto.value == "1321124163") {
        añadirProduc.push("Mole");
        igual = igual + 60;
        localStorage.setItem("cantidad", igual);
    }
    if (producto.value == "1321124164") {
        añadirProduc.push("Harina");
        igual = igual + 40;
        localStorage.setItem("cantidad", igual);
    }
    if (producto.value == "1321124165") {
        añadirProduc.push("Cajeta");
        igual = igual + 45;
        localStorage.setItem("cantidad", igual);
    }
    if (producto.value == "1321124166") {
        añadirProduc.push("Miel");
        igual = igual + 45;
        localStorage.setItem("cantidad", igual);
    }
    if (producto.value == "1321124167") {
        añadirProduc.push("Leche");
        igual = igual + 20;
        localStorage.setItem("cantidad", igual);
    }
    if (producto.value == "1321124168") {
        añadirProduc.push("Papas");
        igual = igual + 10;
        localStorage.setItem("cantidad", igual);
    }
    if (producto.value == "2") {
        localStorage.setItem("cantidad", 0);
        mensajesError.push("Lista Borrada");
    }
    if (producto.value != "1321124161" && producto.value != "1321124162" && producto.value != "1321124163" && producto.value != "1321124164" && producto.value != "1321124165" && producto.value != "1321124166" && producto.value != "1321124167" && producto.value != "1321124168") {
        mensajesError.push("No coincide con ningun producto de las lista");
    }

    error.innerHTML = mensajesError.join(", ");
    lista.innerHTML = añadirProduc.join(", ");
}

function sumas() {
    var sum = parseInt(localStorage.getItem("cantidad"));
    var rec = [];
    rec.push(sum);

    total.innerHTML = rec.join();

}