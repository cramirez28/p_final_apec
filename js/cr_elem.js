//Variables_Globales

//#End_Variables_Globales

//CM : Crea y Modifica

function _dce(el){
        return document.createElement(el);
}

  
 function B_UrlImgFb(tbl) {
    var _RCFB = firebase.database().ref().child(tbl);
   
    _RCFB.on('value',gotData, errData);

    function gotData(data) {
        var scores = data.val();
        var keys = Object.keys(scores);
        
         destino = document.getElementById("slider_img");
         destino.innerHTML = "";
         
        for ( var i = 0; i < keys.length; i++ ){
            var k = keys[i];
        
            a = _dce('a');
            a.className = "carousel-item";
            a.setAttribute ("href", "#one!");
            img = _dce('img');
            img.setAttribute ("src", scores[k].url);
            a.appendChild(img);
            destino.appendChild(a);     
        };
        
        $('.carousel').carousel();
    }

    function errData (err) {
        console.log('Error!');
        console.log(err);
    }
  
}

//<a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

function CM_Mdesplegable(desc, user) {
    destino = document.getElementById("dropdown1");
    destino.innerHTML = "";
    
        if (desc == 0) {
            li = _dce('li');
            a = _dce('a');
            a.innerHTML = "Usuario : " + user ;
            a.setAttribute("href", "#!");
            a.className = "modal-trigger";
            li.appendChild(a);
            destino.appendChild(li);
     
            li = _dce('li');
            a = _dce('a');
            a.innerHTML = "Perfil";
            a.setAttribute("href", "perfil.html");
            a.className = "modal-trigger";
            i = _dce('i');
            i.className = "large material-icons";
            i.innerHTML = "perm_identity";
            a.appendChild(i);
            li.appendChild(a);
            destino.appendChild(li);

            li = _dce('li');
            li.className = "divider";
            li.setAttribute("tabindex", "-1");
            destino.appendChild(li);
     
            li = _dce('li');
            a = _dce('a');
            a.innerHTML = "Cerrar sesión";
            a.onclick = logout;
            a.className = "modal-trigger";
            i = _dce('i');
            i.className = "large material-icons";
            i.innerHTML = "exit_to_app";
            a.appendChild(i);
            li.appendChild(a);
            destino.appendChild(li);
     
            destino.appendChild(li);
        }
        else if (desc == 1) {
            li = _dce('li');
            a = _dce('a');
            a.innerHTML = "Iniciar Sesión";
            a.setAttribute("href", "#modal1");
            a.setAttribute("id", "Opc1");
            a.className = "modal-trigger";
            i = _dce('i');
            i.className = "large material-icons";
            i.innerHTML = "people";
            a.appendChild(i);
            li.appendChild(a);
            destino.appendChild(li);
     
            li = _dce('li');
            a = _dce('a');
            a.innerHTML = "Registrate";
            a.setAttribute("href", "#modal1");
            a.setAttribute("id", "Opc2");
            a.className = "modal-trigger";
            i = _dce('i');
            i.className = "large material-icons";
            i.innerHTML = "person_add";
            a.appendChild(i);
            li.appendChild(a);
            destino.appendChild(li);
     
     
            destino.appendChild(li);
        }
        
       $('.dropdown-trigger').dropdown();

       $("#Opc1").click(function() {
        Opc = 1;
        //$('.tabs').tabs('select','test-swipe-1');
       });

       $("#Opc2").click(function() {
        Opc = 2;
        //$('.tabs').tabs('select','test-swipe-2');
        });

        /* Division
       li = _dce('li');
       li.className = "divider";
       li.setAttribute("tabindex", "-1");
       destino.appendChild(li);
        */
   };
   


