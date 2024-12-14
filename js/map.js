let map = L.map('map').setView([51.223284, 4.458722], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let marker = L.marker([51.223284, 4.458722]).addTo(map);
marker.bindPopup("<b>Deurne</b><br>2100").openPopup();