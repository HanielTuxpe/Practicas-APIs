  //CONDIGURACIÓN DEL FIREBASE PROVISTO POR EL SERVICIO

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAuth} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAVoqn2vbza3Izts_bmQrtb87WNa4JMARk", //CLAVE API DEL SERVICIO
    authDomain: "tuxapis.firebaseapp.com", //DOMINIO DEL PROYECTO CREADO
    projectId: "tuxapis", //ID DEL PROYECTO
    storageBucket: "tuxapis.appspot.com", //ALMACEN DE DATOS DEL PROYECTO
    messagingSenderId: "294794142817", 
    appId: "1:294794142817:web:8cdf6c36d140e10b6ef620", //ID DE LA APLICACIÓN
    measurementId: "G-MWQ5BSSQF8"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {auth};