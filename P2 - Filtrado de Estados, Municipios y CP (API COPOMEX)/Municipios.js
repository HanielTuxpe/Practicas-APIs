const slc1 = document.getElementById("slc1");
const slc2 = document.getElementById("slc2");
const slc3 = document.getElementById("slc3");
const bttn = document.getElementById("bttn");

/*TOKEN GRATUITO PROVISTO POR EL API DE COPOMEX. SI QUIERES PROBAR LA PRÁCTICA TE SUGIERO CAMBIAR EL TOKEN
  POR EL TUYO O SIMPLEMENTE PON PRUEBAS EN LUGAR DEL TOKEN*/
const token = '551a4767-0a94-4a21-a6dc-4f0ac58e5ef5';

//FUNCIÓNES PARA EXTRAER LOS DATOS DEL JSON DE RESPUESTA A LA PETICIÓN DE LA API
function estados(){
    fetch('https://api.copomex.com/query/get_estados?token=' + token)
    .then((response) => response.json())
    .then((data) => {
        estadosD = data.response.estado
        console.log(data)
        estadosD.map(estados=>{
            let newoption = document.createElement("option");
            newoption.value = estados;
            newoption.text = estados;
            slc1.add(newoption);
        })
    })
}
estados()

slc1.addEventListener("change", municipios)

function municipios() {
    let claveE = slc1.value;
    fetch('https://api.copomex.com/query/get_municipio_por_estado/'+claveE+'?token=' + token)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        slc2.innerHTML="";
        municipiosD = data.response.municipios;
        municipiosD.map(muni=>{
            let newoption = document.createElement("option");
            newoption.value = muni;
            newoption.text = muni;
            slc2.add(newoption);
        })
    })
}

slc2.addEventListener("change", codpos)

function codpos() {
    let clave = slc2.value;
    fetch('https://api.copomex.com/query/get_cp_por_municipio/'+ clave+'?token=' + token)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        slc3.innerHTML="";
        codp = data.response.cp;
        codp.map(cpos=>{
            let newoption = document.createElement("option");
            newoption.value = cpos;
            newoption.text = cpos;
            slc3.add(newoption);
        })
    })
}


//CREAR DIVS EN LA MISMA PÁGINA CON LOS DATOS INGRESADOS
let div = document.createElement("div");
let body = document.body;

function creardiv() {

    const name = document.getElementById("name");
    const edad = document.getElementById("edad");
    const calle = document.getElementById("calle");

    let dato1 = name.value;
    let dato2 = edad.value;
    let dato3 = slc1.value;
    let dato4 = slc2.value;
    let dato5 = slc3.value;
    let dato6 = calle.value;

    let br = document.createElement("br");

    div.setAttribute("id", "div1");
    body.appendChild(div);

    let label1 = document.createElement("p");
    label1.textContent = 'Nombre: ' + dato1;
    div.appendChild(label1);
    div.appendChild(br);

    let label2 = document.createElement("p");
    label2.textContent = 'Edad: ' + dato2;
    div.appendChild(label2);
    div.appendChild(br);

    let label3 = document.createElement("p");
    label3.textContent = 'Estado: ' + dato3;
    div.appendChild(label3);
    div.appendChild(br);

    let label4 = document.createElement("p");
    label4.textContent = 'Municipio: ' + dato4;
    div.appendChild(label4);
    div.appendChild(br); 

    let label5 = document.createElement("p");
    label5.textContent = 'C.P.: ' + dato5;
    div.appendChild(label5);
    div.appendChild(br);

    let label6 = document.createElement("p");
    label6.textContent = 'Calle: ' + dato6;
    div.appendChild(label6);
    div.appendChild(br);
}