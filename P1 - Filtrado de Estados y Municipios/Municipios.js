const slc1 = document.getElementById("slc1");
const slc2 = document.getElementById("slc2");

function estados(){
    $(document).ready(function() {
        //GET
        $.get("estados.json", function(data) {
            console.log(data);
            data.forEach(function(estado) {
                let newoption = document.createElement("option");
                newoption.value = estado.clave;
                newoption.text = estado.nombre;
                slc1.add(newoption);
            });
            municipios()
        });
    });
}
estados()

slc1.addEventListener("change", municipios)

function municipios() {
    let claveE = slc1.value;
    fetch('estados-municipios.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data[claveE])
        slc2.innerHTML="";
        data[claveE].map(municipio=>{
            let newoption = document.createElement("option");
            newoption.value = municipio;
            newoption.text = municipio;
            slc2.add(newoption);
        })
    })
}