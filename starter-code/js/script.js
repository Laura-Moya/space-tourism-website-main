
function underlineSelectedOption(link){

  switch(link.innerHTML)
  {
    case 'MOON': break;
    case 'MARS': window.location.href = '../starter-code/destination-mars.html';
    case 'EUROPA': window.location.href = '../starter-code/destination-europa.html';
    case 'TITAN': window.location.href = '../starter-code/destination-titan.html';
  }

}
