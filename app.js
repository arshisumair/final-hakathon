
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDvHT_7rNn87vQ1aOrjybQEafAj9MUQR9Q",
    authDomain: "fir-92950.firebaseapp.com",
    projectId: "fir-92950",
    storageBucket: "fir-92950.firebasestorage.app",
    messagingSenderId: "897684048434",
    appId: "1:897684048434:web:5f85e99972ea4531818a2b",
    measurementId: "G-CVVK2JDXGW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



  const submit = document.getElementById('btn')
submit.addEventListener("click", function (event) {
  event.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  alert("successfully")
  window.location.href="login.html"


  
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;



      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
  });