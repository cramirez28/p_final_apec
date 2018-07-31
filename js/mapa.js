function Crear_mapa() {
    Mapa = document.getElementById("Mapa");
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
    
    var map = L.map('Mapa').setView([18.469824, -69.922060], 17).addLayer(osm);
    
    L.marker([18.469824, -69.922060])
    .addTo(map)
    .bindPopup('Lugar de Trabajo.')
    .openPopup();

}
             

function Carg_mapa() {
    Mapa = document.getElementById("Mapa");
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
    
    var map = L.map('Mapa').setView([18.469824, -69.922060], 13).addLayer(osm);

    {
        var popup = L.popup();

        function Mar_Map(e) {
            document.getElementById("C_Log").value = "";
            document.getElementById("C_Lat").value = "";
        
            if(typeof(new_event_marker)==='undefined')
            {
            new_event_marker = new L.marker(e.latlng,{ draggable: true});
            new_event_marker.addTo(map).bindPopup('Ubicacion Seleccionada.').openPopup();        
            }
            else 
            {
            new_event_marker.setLatLng(e.latlng);     
        }
        document.getElementById("C_Log").value = e.latlng.lat.toString();
        document.getElementById("C_Lat").value = e.latlng.lng.toString();
        } 
        
        map.on('click', Mar_Map);
    }

}
           


