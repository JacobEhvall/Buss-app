 var x = document.getElementById("demo"); 
 function getLocation() {
if (navigator.geolocation) { 
navigator.geolocation.getCurrentPosition(showPosition);
} else {
 x.innerHTML = "Geolocation is not supported by this browser."; }
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition); } else {
x.innerHTML = "Geolocation is not supported by this browser."; }
}
function showPosition(position) {
x.innerHTML = "Latitude: " + position.coords.latitude +
"<br>Longitude: " + position.coords.longitude;
}
function hideIcon(self) {
    self.style.backgroundImage = 'none';
}
var img = document.createElement("img");
 
img.src = "image.png";
var src = document.getElementById("x");
 
src.appendChild(img);

