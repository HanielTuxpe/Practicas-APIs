//ESTE ARCHIVO ESTÁ VINCULADO CON BIENVENIDA.HTML
//IMPORTANDO LAS FUNCIONES DE LOS ARCHIVOS DEL FIREBASE

import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from './firebase.js'


//FUNCION PARA CERRAR SESIÓN
const cerrarS = document.querySelector('#logout')
cerrarS.addEventListener('click', async() =>{
    await signOut(auth)
    window.location.href = 'index.html';
    console.log('sesion cerrada')
})

//FUNCIÓN PARA VERIFICAR SI HAY UNA SESIÓN ACTIVA, DE LO CONTRARIO RETORNAR AL INICIO
onAuthStateChanged(auth, function (user) {
    if (user) {
        if (window.location.pathname !== '/Bienvenida.html') {
            window.location.href = 'Bienvenida.html';
        }
    } else {
        if (window.location.pathname !== '/index.html') {
            window.location.href = 'index.html';
        }
    }
});