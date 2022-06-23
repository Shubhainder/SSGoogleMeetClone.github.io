

let d = new Date();

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sun", 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
let date = d.getDate();
let day = days[d.getDay()];
let m = month[d.getMonth()];
let t = d.toLocaleTimeString('en-US', {hourCycle: 'h12'})

document.querySelector('#time').innerHTML = `${t.slice(0,5)} ${(t.slice(8,11))} • ${day}, ${m.slice(0,3)} ${date} `;

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  console.log("working")
}
window.onclick = function(event) {
  if (!event.target.matches('.support')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


const newEl = document.querySelector('.new-meet');
const video = document.getElementById('video');



newEl.addEventListener('click', function(){

  document.querySelector('#video').classList.remove('hidden');
  document.querySelector('#video').style.marginLeft= '100px';
  document.querySelector('#video').style.position = 'absolute';
  document.querySelector('#video').style.top = '145px';
  document.querySelector('.cross').style.position = 'absolute';
  document.querySelector('.cross').style.top = '10.5em';
  document.querySelector('.cross').style.left = '98.5px';
  document.querySelector('.cross').style.background = 'red';
  
  
  
  document.querySelector('.cross').classList.remove('hidden');
  document.querySelector('.cross').classList.add('material-symbols-outlined');

 
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
   
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
     
      video.srcObject = stream;
      video.play();
    });
  }
})

document.querySelector('.cross').addEventListener('click', function(){
 window.location.reload();
})

