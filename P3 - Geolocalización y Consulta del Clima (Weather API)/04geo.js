const temp = document.getElementById("temp");
const temp1 = document.getElementById("temp1");
const temp2 = document.getElementById("temp2");
const temp3 = document.getElementById("temp3");
const temp4 = document.getElementById("temp4");
const temp5 = document.getElementById("temp5");

const city = document.getElementById("city");

const day1 = document.getElementById("day1");
const day2 = document.getElementById("day2");
const day3 = document.getElementById("day3");
const day4 = document.getElementById("day4");
const day5 = document.getElementById("day5");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");

const img = document.getElementById("img");

const diasSemana = [ "Lunes", "Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

if (navigator.geolocation) {
  console.log("la geolocalizacion esta disponible");
  const FSuccess = (pos) => {
    const lati = pos.coords.latitude;
    const long = pos.coords.longitude;
    const dir = (href = `http://api.weatherapi.com/v1/forecast.json?key=efc98b3a6f084d22a25180747230910&q=${lati},${long}&days=6&aqi=no&alerts=yes`);

    console.log(pos);
    console.log("se obtuvo la ubicacion correctamente");
    console.log(`Tu ubicacion es: Lat:${pos.coords.latitude} Long:${pos.coords.longitude}`
    );
    fetch(dir)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        //UBICACIÓN
        const loc = data.location.name + ", " + data.location.region + ", " + data.location.country;
        city.textContent = `${loc}`;

        //LOGO
        const logo = data.current.condition.icon;
        img.src = logo;

        //DÍAS
        const d1 = data.forecast.forecastday[1].date
        const f1 = new Date(d1)
        const fe1 = diasSemana[f1.getDay()]
        day1.textContent = fe1
        const d2 = data.forecast.forecastday[2].date
        const f2 = new Date(d2)
        const fe2 = diasSemana[f2.getDay()]
        day2.textContent = fe2
        const d3 = data.forecast.forecastday[3].date
        const f3 = new Date(d3)
        const fe3 = diasSemana[f3.getDay()]
        day3.textContent = fe3
        const d4 = data.forecast.forecastday[4].date
        const f4 = new Date(d4)
        const fe4 = diasSemana[f4.getDay()]
        day4.textContent = fe4
        const d5 = data.forecast.forecastday[5].date
        const f5 = new Date(d5)
        const fe5 = diasSemana[f5.getDay()]
        day5.textContent = fe5

        //TEMPERATURAS
        const t = data.current.temp_c
        temp.textContent = `${t}°C`
        const t1 = data.forecast.forecastday[1].day.avgtemp_c
        temp1.textContent = `${t1}°C`
        const t2 = data.forecast.forecastday[2].day.avgtemp_c
        temp2.textContent = `${t2}°C`
        const t3 = data.forecast.forecastday[3].day.avgtemp_c
        temp3.textContent = `${t3}°C`
        const t4 = data.forecast.forecastday[4].day.avgtemp_c
        temp4.textContent = `${t4}°C`
        const t5 = data.forecast.forecastday[5].day.avgtemp_c
        temp5.textContent = `${t5}°C`

        //ICONOS
        const im1 = data.forecast.forecastday[1].day.condition.icon
        img1.src = im1;
        const im2 = data.forecast.forecastday[2].day.condition.icon
        img2.src = im2;
        const im3 = data.forecast.forecastday[3].day.condition.icon
        img3.src= im3;
        const im4 = data.forecast.forecastday[4].day.condition.icon
        img4.src = im4;
        const im5 = data.forecast.forecastday[5].day.condition.icon
        img5.src = im5;
      });
  }; const FError = (pos) => {
    console.log("Ocurrio un error" + FError.message);
  }; const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }; navigator.geolocation.getCurrentPosition(FSuccess, FError, options);
} else {
  console.log("la geolocalizacion no esta disponible");
}
