var firebaseConfig = {
     apiKey: "AIzaSyBDYVtizAOA07K3gSKVK136xtq0XPC94wY",
     authDomain: "tedx-newsletter.firebaseapp.com",
     databaseURL: "https://tedx-newsletter.firebaseio.com",
     projectId: "tedx-newsletter",
     storageBucket: "tedx-newsletter.appspot.com",
     messagingSenderId: "551206429333",
     appId: "1:551206429333:web:1ba5a438fa64bceac1b19c",
     measurementId: "G-B70DQ7WWYE"
     };
     // Initialize Firebase
firebase.initializeApp(firebaseConfig);
     
// Reference email collection

var emailRef = firebase.database().ref('Email');

// Listen for form submit
document.getElementById('emailinput').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
  
  // Get values
  var email = document.getElementById('email').value;
  
  // Save message
  saveEmail(email);
  document.getElementById('emailinput').reset();
}

//Save message to firebase
function saveEmail(email){
  var newEmailRef = emailRef.push();
  newEmailRef.set({
    
    email: email
    
  });
}

function show(){
  alert("Your suscription has been activated.")
}