//ESTE ARCHIVO ESTÁ VINCULADO CON REGISTRO.HTML
//IMPORTANDO LAS FUNCIONES DE LOS ARCHIVOS DEL FIREBASE

import { createUserWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from './firebase.js'

const registro = document.querySelector("#regForm")

//FUNCIÓN PARA EL REGISTRO POR CORREO ELECTRÓNICO
registro.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const correo = registro['email'].value
    const contra = registro['password'].value
    try {
        const resultadoR = await createUserWithEmailAndPassword(auth, correo, contra)
        console.log(resultadoR)
        alert("Bienvenido", "success")
        alert("Se creó tu cuenta, da clic en iniciar sesión para ir al formulario");
        } catch (error) {
        console.log(error.message)
        console.log(error.code)
        if(error.code === 'auth/email-already-in-use'){
        alert("el correo ya esta registrado","error")
        }
        else if(error.code === 'auth/invalid-email'){
        alert("Correo invalido","error")
        }
        else if(error.code === 'auth/weak-password'){
        alert("contraseña demaciado devil","error")
        }
        else if(error.code){
        alert("Surguio un problema","error")
        }
    }
})