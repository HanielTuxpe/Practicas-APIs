const slc1 = document.getElementById("slc1");
const slc2 = document.getElementById("slc2");
const slc3 = document.getElementById("slc3");

var estados = "estados.json"

fetch(estados)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    for(let datos of data){
        let newoption = document.createElement("option");
        newoption.value = datos.clave;
        newoption.text = datos.nombre;
        slc1.add(newoption);
    }
        })
    .catch((error) => {
        console.error("Error al cargar el archivo JSON:", error);
    });

$(document).ready(function() {

    //GET
    $.get("estados.json", function(data) {
        console.log(data);
        data.forEach(function(estado) {
            let newoption = document.createElement("option");
            newoption.value = estado.clave;
            newoption.text = estado.nombre;
            slc2.add(newoption);
        });
    });
    //AJAX
    $.ajax({
        url: "estados.json",
        type: "GET",
        dataType: "json",
        success: function(data) {
            console.log(data);
            data.forEach(function(estado) {
                let newoption = document.createElement("option");
                newoption.value = estado.clave;
                newoption.text = estado.nombre;
                slc3.add(newoption);
            });
        },
        error: function(xhr, status, error) {
            console.error("Error al cargar datos con $.ajax:", error);
        }
    });
});
