function webTheam( x ){
  var body = document.getElementsByTagName("body")[0];
  var x = window.localStorage.getItem('theam');

  if ( x === 'dark'){
    document.getElementById('night').style.display = 'none';
    document.getElementById('sun').style.display = 'block';
    body.style.setProperty('transition-duration', '5s');
    body.style.setProperty('--black', '#fff');
    body.style.setProperty('--white', '#000');
    body.style.setProperty('--backgroundblack', '#cacacab3');
    body.style.setProperty('--backgroundwhite', '#060606b3');
  }
  else if ( x === 'light'){
    document.getElementById('night').style.display = 'block';
    document.getElementById('sun').style.display = 'none';
    body.style.setProperty('transition-duration', '5s');
    body.style.setProperty('--black', '#000');
    body.style.setProperty('--white', '#fff');
    body.style.setProperty('--backgroundblack', '#060606b3');
    body.style.setProperty('--backgroundwhite', '#cacacab3');
  }
}









function myNavopen() {
  var element = document.getElementById("manu");
  element.classList.add("manu");
} 

function myNavclose() {
  var element = document.getElementById("manu");
  element.classList.remove("manu");
} 


function moon() {
  var element = document.getElementById("manu");
  element.classList.remove("manu");
} 




function mode( i ) {

   var body = document.getElementsByTagName("body")[0];
   var theam = 'null';

  if ( i === 'dark'){
    document.getElementById('night').style.display = 'none';
    document.getElementById('sun').style.display = 'block';
    body.style.setProperty('transition-duration', '5s');
    body.style.setProperty('--black', '#fff');
    body.style.setProperty('--white', '#000');
    body.style.setProperty('--backgroundblack', '#cacacab3');
    body.style.setProperty('--backgroundwhite', '#060606b3');
    window.localStorage.setItem('theam','dark');
  }
  else if ( i === 'light'){
    document.getElementById('night').style.display = 'block';
    document.getElementById('sun').style.display = 'none';
    body.style.setProperty('transition-duration', '5s');
    body.style.setProperty('--black', '#000');
    body.style.setProperty('--white', '#fff');
    body.style.setProperty('--backgroundblack', '#060606b3');
    body.style.setProperty('--backgroundwhite', '#cacacab3');
    window.localStorage.setItem('theam','light')
  }
}