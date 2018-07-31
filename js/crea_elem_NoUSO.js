//window.onload = inicializar;


/*
function inicializar(){
       var firebase = require("firebase");    
      // var JsonD = [];  
}*/
//Variables_Globales
var JsonD = [];
//#End_Variables_Globales



function _dce(el){
        return document.createElement(el);
}

function crear_slider() {
        B_UrlImgFb('Imagenes/img_sld');

     //B_UrlImgFb('Imagenes/img_sld');
   
     destino = document.getElementById("slider_img");
     destino.innerHTML = "";
     alert(JsonD + " -01");
     //var i = 0; i < keys.length; i++
     for (var i = 0; i < JsonD.length; i++) {
        alert(i);
       /*
        a = _dce('a');
        a.className = "carousel-item";
        a.setAttribute ("href", "#one!");
        img = _dce('img');
        img.setAttribute ("src", scores[k].url);
        a.appendChild(img);
        destino.appendChild(a);   */
    }
    
  

    /*
    a = _dce('a');
    a.className = "carousel-item";
    a.setAttribute ("href", "#one!");
    img = _dce('img');
    img.setAttribute ("src","img/img01.jpg");
    a.appendChild(img);
    destino.appendChild(a);

    a = _dce('a');
    a.className = "carousel-item";
    a.setAttribute ("href", "#two!");
    img = _dce('img');
    img.setAttribute ("src","img/img02.png");
    a.appendChild(img);
    destino.appendChild(a);

    a = _dce('a');
    a.className = "carousel-item";
    a.setAttribute ("href", "#three!");
    img = _dce('img');
    img.setAttribute ("src","img/img03.jpg");
    a.appendChild(img);
    destino.appendChild(a);

    a = _dce('a');
    a.className = "carousel-item";
    a.setAttribute ("href", "#four!");
    img = _dce('img');
    img.setAttribute ("src","img/img04.jpg");
    a.appendChild(img);
    destino.appendChild(a);

    a = _dce('a');
    a.className = "carousel-item";
    a.setAttribute ("href", "#five!");
    img = _dce('img');
    img.setAttribute ("src","img/img05.jpg");
    a.appendChild(img);
    destino.appendChild(a);    */

  //  $('.carousel').carousel();

}
 /*
function B_UrlImgFb(tbl) {
    alert("Hola e" + tbl);
    var _RCFB = firebase.database().ref().child(tbl);

        _RCFB.on('value', function(data){
        var JsonD = data.val();
        alert(Object.keys(JsonD).length);
        for (var i = 0; i < Object.keys(JsonD).length; i++) {  
            
            var urls = JsonD[i].url;
            alert(urls);      
        }
    });
    alert("Hola Salio");
}*/

  
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