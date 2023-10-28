//ESTE ARCHIVO ESTÁ VINCULADO CON INDEX.HTML PARA EL INICIO DE SESIÓN
//IMPORTANDO LAS FUNCIONES DE LOS ARCHIVOS DEL FIREBASE

import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider}
from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { auth } from "./firebase.js";

const loginForm = document.querySelector("#loginForm");

//FUNCIÓN PARA LOGEO CON CORREO ELECTRÓNICO UNA VEZ REGISTRADO
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const mail = loginForm["correo"].value;
    const contra = loginForm["password"].value;
    try {
    const datosValid = await signInWithEmailAndPassword(auth, mail, contra);
    console.log(datosValid);
    location.href = "Bienvenida.html";
    alert("Bienvenido", "success");
    } catch (error) {
        if (error.code === "auth/wrong-password") {
            alert("Contraseña incorrecta", "error");
        } else if (error.code === "auth/user-not-found") {
            alert("Usuario no encontrado", "error");
        } else if (error.code) {
            alert("Surgio un problema", "error");
        }
    }
});

//FUNCIÓN PARA LOGEO USANDO LA API DE FACEBOOK DEVELOPERS
const fb = document.querySelector("#logF");
fb.addEventListener("click", async (e) => {
    e.preventDefault();
    const proveedorF = new FacebookAuthProvider();
    try {
        const datosVal = await signInWithPopup(auth, proveedorF);
        console.log(datosVal);
        alert("facebook inicio de sesion");
        location.href = "Bienvenida.html";
    } catch (error) {
        console.log(error); 
    }
});


//FUNCIÓN DE LOGEO USANDO LOS SERVICIOS DE GOOGLE
const gg = document.querySelector("#logG");
gg.addEventListener("click", async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try{
        const datosVal = await signInWithPopup(auth, provider)
        console.log(datosVal)
        location.href = "Bienvenida.html";
        alert("Google inicio de sesion");
    }
    catch (error){
        console.log(error)
    }
});