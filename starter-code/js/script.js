var moonDescription = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
var marsDescription = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
var europaDescription = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
var titanDescription= "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."

var moonTravelTime = "384,400 km";
var marsDistance = "225 mil. km";
var europaDistance = "628 mil. km";
var titanDistance = "1.6 bil. km";

var moonDistance = "3 days";
var marsTravelTime = "9 months";
var europaTravelTime = "3 years";
var titanTravelTime = "7 years";


function loadData(link)
{
  var nombrePlaneta = link;
  // Rellenamos la imagen del planeta
  document.getElementById("imagenPlaneta").src = "assets/destination/image-"+nombrePlaneta+".webp";
  // Rellenamos el nombre del planeta
  document.getElementById("tituloPlaneta").innerHTML = nombrePlaneta.toUpperCase();
  // Rellenamos la descripcion
  document.getElementById("descripcionPlaneta").innerHTML = window[nombrePlaneta.concat('Description')];
  // Rellenamos la distancia
  document.getElementById("distance").innerHTML = window[nombrePlaneta.concat('Distance')];
  // Rellenamos el tiempo estimado
  document.getElementById("travelTime").innerHTML = window[nombrePlaneta.concat('TravelTime')];

}

function redirectPage(link){
  if(link.innerHTML == "01 Destination")
  {
    window.location.href = "common-destination.html";
    link = "moon";
  }
  else{
    link = link.innerHTML.toLowerCase();
  }
  loadData(link);
}
