let mymap = L.map('mapid');
let latlngs = [];

let getPosition = pos =>{
    let latitude = pos.coords.latitude;
    let longitude = pos.coords.longitude;
    let position = [latitude, longitude]
    latlngs.push(position);
    return position;
}

let showMap = (map,position) =>{
    map.setView(position,13);
    let marker = L.marker(position).addTo(map);
}

let error = err => console.warn(`ERROR(${err.code}): ${err.message}`);

let geo_options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
};

if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(position =>{
        showMap(mymap,getPosition(position))},error, geo_options);
}

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibGl2ZWFsZWZhZG0iLCJhIjoiY2pvc3h3M3BiMHJkdTNxbWxidnB2bGp6ZSJ9.5zZFfdoOqKQVvmF6nbGmHw'
}).addTo(mymap);

function onMapClick(e) {
    latlngs.push([e.latlng.lat,e.latlng.lng]);
    let newMarker = L.marker(e.latlng).addTo(mymap);
    let polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap);
    alert(`Distância em Metros: ${e.latlng.distanceTo(latlngs[0])}`);

}


mymap.on('click', onMapClick);