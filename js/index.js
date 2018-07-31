

function User_Log() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      CM_Mdesplegable(0 , user.email);
    } else {
        CM_Mdesplegable(1 , null);
      // No user is signed in.
    }
  });
}


function Crea_usu() {
  var Err_Cu = 0; // CAMB01

  var UserEmail = document.getElementById("c_email_cr").value;
  var UserPass = document.getElementById("c_pass_cr").value;
  var UserPassConf = document.getElementById("c_pass_cr_r").value;

  if (UserPass === UserPassConf) {
    
    firebase.auth().createUserWithEmailAndPassword(UserEmail, UserPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorCode + " - " + errorMessage);
      Err_Cu = 1;
      // ...
    });
    //window.alert("Error : " + errorCode + " - " + errorMessage);

    

  } else {
    alert("Contraseña no coinciden" + "CAMB01");
      /*swal({
        title: "Revisar informacion :",
        text: "Verifique su contraseña..!",
        icon: "info",
      });*/
  }
  if(Err_Cu === 0)
  {
    
    alert("Usuario Creado satisfactoriamente" + "CAMB01");
    CerrarForm();
  }
  

}

function Cambiar_contraseña() {
 var user = firebase.auth().currentUser;
 var PassNew1 = document.getElementById("c_PassNew1").value;
 var PassNew2 = document.getElementById("c_PassNew2").value;
 if (PassNew1 === PassNew2) {
  user.updatePassword(PassNew1).then(function() {
    // Update successful.
    alert("Contraseña actualizada correctamente, Debe volver a Logearse" + "CAMB01");
    logout();
  }).catch(function(error) {
    alert( error.code + " - " + error.message + "CAMB01");
    logout();
    // An error happened.
  });
 } else {
   alert("Verificar la confirmacion de la contraseña " + "CAMB01");
 }
}

function login() {
  var Err_Log = 0;
  var UserEmail = document.getElementById("c_email_lg").value;
  var UserPass = document.getElementById("c_pass_lg").value;

  firebase.auth().signInWithEmailAndPassword(UserEmail, UserPass).catch(function(error) {
    // Handle Errors here.
    
    var errorCode = error.code;
    var errorMessage = error.message;
      
      window.alert("Error : " + errorCode + " - " + errorMessage);
      Err_Log = 1;
    // ...
  }); 

  if(Err_Log === 0)
  {

    alert("Usuario autenticado correcatamente" + "CAMB01");
    CerrarForm();
  }
}

function logout() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
       swal({
      //  title: "Saliendo del sistesatiRevisar informacion :",
        text: "Sesión cerrada correctamente..!!" + " REV01",
        icon: "success",
      });
  }).catch(function(error) {
    alert("Ah ocurrido un error : " + error);
    // An error happened.
  });
  location.href = "index.html";
}



function CerrarForm() {
  $('.modal').modal('close');

}
/*
<input id="c_email_cr" type="email" class="validate" >
<input id="c_pass_cr" type="password" class="validate">
<input id="c_pass_cr_r" type="password" class="validate" >
*/