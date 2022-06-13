const firebaseConfig = {
    apiKey: "AIzaSyBTF2kI4ntRB6ITzsfjxiXaj-2XrFVefIA",
    authDomain: "contact-form-86e85.firebaseapp.com",
    databaseURL: "https://contact-form-86e85-default-rtdb.firebaseio.com",
    projectId: "contact-form-86e85",
    storageBucket: "contact-form-86e85.appspot.com",
    messagingSenderId: "652453351463",
    appId: "1:652453351463:web:5074bffd12353ac4f27e02",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
let messagesRef = firebase.database().ref("contact-form");



//Form submission
document.getElementById("contactForm").addEventListener('submit', submitData);

function submitData(e) {
    //Prevent defaualt
    e.preventDefault();

    let name = getInput('name');
    let email = getInput('email');
    let msg = getInput('msg');

    console.log(name);
    sendFirebase(name, email, msg);
}

function getInput(id) {
    return document.getElementById(id).value;
}


//Send to firebase
function sendFirebase(name, email, msg) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        id: newMessageRef.key,
        name: name,
        email: email,
        msg: msg
    })
}