function register(){
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  firebase.auth().createUserWithEmailAndPassword(email, pass)
  .then(()=>{
    alert("تم إنشاء الحساب");
    window.location = "dashboard.html";
  })
  .catch(err => alert(err.message));
}

function login(){
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  firebase.auth().signInWithEmailAndPassword(email, pass)
  .then(()=>{
    window.location = "dashboard.html";
  })
  .catch(err => alert(err.message));
}
