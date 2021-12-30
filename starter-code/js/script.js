var marsDescription = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
var europaDescription = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
var titanDescription= "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."

var marsDistance = "225 mil. km";
var europaDistance = "628 mil. km";
var titanDistance = "1.6 bil. km";

var marsTravelTime = "9 months";
var europaTravelTime = "3 years";
var titanTravelTime = "7 years";


function loadData(link)
{
  var nombrePlaneta = link.innerHTML.toLowerCase();
  // Rellenamos la imagen del planeta
  document.getElementById("imagenPlaneta").src = "assets/destination/image-"+nombrePlaneta+".webp";
  // Rellenamos el nombre del planeta
  document.getElementById("tituloPlaneta").innerHTML = nombrePlaneta.toUpperCase();
  // Rellenamos la descripcion
  document.getElementById("descripcionPlaneta").innerHTML = window[nombrePlaneta.concat('Description')];
  // Rellenamos la distancia
  document.getElementById("distance").innerHTML = window[nombrePlaneta.concat('Distance')];
  // Rellenamos el tiempo estimado
  var travelTime = nombrePlaneta+'TravelTime';
  document.getElementById("travelTime").innerHTML = window[nombrePlaneta.concat('travelTime')];

}

function redirectPage(link){
  loadData(link);
}
