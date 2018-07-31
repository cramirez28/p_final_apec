function Inicio() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        CM_Mdesplegable(0 , user.email);
        var C_email = user.email;
      } else {
        location.href = "index.html";
      }
    });
  }
  

 function _dce(el){
    return document.createElement(el);
}


function CM_Select(tbl) {
  
var _RCFB = firebase.database().ref().child(tbl);

_RCFB.on('value',gotData, errData);

function gotData(data) {
    var scores = data.val();
    var keys = Object.keys(scores);
    
     destino = document.getElementById("Slt_Cat");
     destino.innerHTML = "";     
    for ( var i = 0; i < keys.length; i++ ){
        var k = keys[i];
      
       if (scores[k].valor === "X") {
        opt = _dce('option');
        opt.setAttribute ("value", i + 1);
        opt.innerHTML = scores[k].nombre;
        destino.appendChild(opt);    
       }
       
    };
      //Seleccion de Categoria
      $('select').formSelect();
}

function errData (err) {
    console.log('Error!');
    console.log(err);
}

}

/*
<select id="Slt_Cat">    
 <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>*/


   function Guarda_Reporte() {
    PS1 = document.getElementById("Slt_Cat");
    des1 = PS1.options[PS1.selectedIndex].text;
    des2 = document.getElementById("f_hecho").value;
    des3 = document.getElementById("coment").value;
    des4 = document.getElementById("C_Log").value;
    des5 = document.getElementById("C_Lat").value;

   alert("Datos a Guardar - Categoria :" + des1 + " Fecha de Hecho :" + des2 + " Comentario :" + des3 + " Longitud / Lagtitud :" + des4 + "/" +des5);
}



  function Con_Ult_Rep(tbl) {
    var Ult_reg = 0;

   do {
    var _RCFB = firebase.database().ref().child(tbl);
    _RCFB.on('value',gotData, errData);
    
    function gotData(data) {
        var scores = data.val();
         Ult_reg = scores.ult_reporte;
         Ult_reg = Ult_reg + 1;
    }

    function errData (err) {
        console.log('Error!');
        console.log(err);
    }
   } while (Ult_reg >= 1);

    alert(Ult_reg);
    }



  function S_ImgEvi(Num_Rep) {
    var storageRef = firebase.storage().ref();

    var ruta = "";
    var fichero = document.getElementById("mult_file");

    var ImagenSubir = fichero.files[0];

    var uploadTask = storageRef.child('eviden/' + 'IMG_EV' + Num_Rep).put(ImagenSubir);

      uploadTask.on('state_changed', function(snapshot){
     
      }, function(error) {
        alert("Ha ocurrido un error subiendo las foto favor validar. CAMB01");
        // Handle unsuccessful uploads
      }, function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          ruta = downloadURL;
          console.log('File available at: ' + downloadURL);
         // alert("Ruta : " + downloadURL);
         
        }).catch(function(error) {
          console.log(" Error Ocurrido :" + error.code);

        });


        
      });

    return ruta;
  }



  function mostarinfo() {
    PS1 = document.getElementById("Slt_Cat");
    des1 = PS1.options[PS1.selectedIndex].text;

    des2 = document.getElementById("f_hecho").value;
    des3 = document.getElementById("coment").value;
    des4 = document.getElementById("C_Log").value;
    des5 = document.getElementById("C_Lat").value;
        
    /*
    des4 = document.getElementById("v_lat").value;
    des5 = document.getElementById("v_long").value;*/
    
    alert(des1 + " - " + des2 + " - " + des3);
 /*
    var x = Con_Ult_Rep('sec_reporte');

    alert(x);
    */
  }


