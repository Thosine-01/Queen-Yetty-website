var menu = document.querySelector('#mobile-menu')
var menuList = document.querySelector('.nav-links')

menu.addEventListener('click', function(){
    console.log('iclick')
    menu.classList.toggle('is_active');
    menuList.classList.toggle('active');
});


var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("activate");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("activate");
  
  index++;
  
  setTimeout(changeSlide,3000);
  
}

changeSlide();