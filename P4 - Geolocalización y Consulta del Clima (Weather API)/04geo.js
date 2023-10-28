const enlace1=document.querySelector("#enlace1");
const enlace2=document.querySelector("#enlace2");

const tempo = document.getElementById("hora");
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const aire = document.getElementById("aire");
const clima = document.getElementById("tiempo");
const hum = document.getElementById("hum");
const img = document.getElementById("imglogo");


//API KEY PROVISTA POR WEATHERAPI
const key = "efc98b3a6f084d22a25180747230910";

//EXTRACCIÓN DE DATOS E IMPLEMENTACIÓN DE LOS MISMOS EN LA PLANTILLA BOOTSTRAP PARA EL CLIMA
if(navigator.geolocation){
    console.log("la geolocalizacion esta disponible");
    const FSuccess=(pos)=>{
        console.log(pos);
        console.log("se obtuvo la ubicacion correctamente");
        //OBTENCIÓN DE LAS CORDENADAS DE TU UBICACIÓN EN TIEMPO REAL
        console.log(`Tu ubicacion es: Lat:${pos.coords.latitude} Long:${pos.coords.longitude}`);
        //PETICIÓN A LA API PARA EL REPORTE DEL CLIMA EN TIEMPO REAL DEPENDIENDO DE TU UBICACIÓN
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${pos.coords.latitude},${pos.coords.longitude}&days=1&aqi=yes&alerts=yes`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        //EXTTRACCIÓN DE DATOS DEL JSON DE RESPUESTA
        const clm = data.current.condition.text
        clima.textContent = clm
        const loc = data.location.name + ", " + data.location.region + ", " + data.location.country
        city.textContent = `${loc}`
        const date = data.current.last_updated
        tempo.textContent = `${date}`
        const logo = data.current.condition.icon
        img.src = `https:${logo}`
        const vel = data.current.temp_c
        temp.textContent = `${vel} °C`
        const air = data.current.wind_kph
        aire.textContent = `${air} km/h`
        const humi = data.current.humidity
        hum.textContent = `${humi} %`
    })
    }
    const FError=(pos)=>{
        console.log("Ocurrio un error" + FError.message);
    } 

    const options={
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0,
    };
    navigator.geolocation.getCurrentPosition(FSuccess,FError,options);  
}else {
    console.log("la geolocalizacion no esta disponible");
}