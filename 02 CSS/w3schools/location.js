var x = document.querySelector('#demo');
console.log(x);
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        x.innerHTML = "error";
    }
}
function showPosition(position){
    x.innerHTML = "Latitude" + position.coords.latitude + "<br> Longitude: " + position.coords.longitude;
}