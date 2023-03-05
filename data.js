const firebaseConfig = {
  apiKey: "AIzaSyAuepfvpAL7MtULGrhDCpCjBPoVnIuLvi0",
  authDomain: "fir-authentication-e54e0.firebaseapp.com",
  projectId: "fir-authentication-e54e0",
  storageBucket: "fir-authentication-e54e0.appspot.com",
  messagingSenderId: "790703941937",
  appId: "1:790703941937:web:fab90cc10bbe8e63102810",
  measurementId: "G-NTQW48DVEQ"
};
 var datab = firebase.database().ref("data");
 var email = document.getElementById("email").value;
 var password = document.getElementById("password").value;

 function userRegister(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
    }).catch(function(error){
        var errorcode = error.code;
        var errormsg = error.message;
    })
 }

 const auth = firebase.auth();

 function signIn(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => alert(e.msg));
    window.open("https://www.google.co.in/", "_self");
    document.getElementById("form").addEventListener("submit",(e) =>  {
      e.preventDefault()
      var userInfo = datab.push()
      userInfo.set({
        name:getId(fname),
        email:getId(femail),
        password:getId(password)
      });
      alert("Succesfully signedUp")
      console.log("sent");
      document.getElementById("form").reset()
    })
 }