var menu = document.querySelector('#mobile-menu')
var menuList = document.querySelector('.nav-links')

menu.addEventListener('click', function(){
    console.log('iclick')
    menu.classList.toggle('is_active');
    menuList.classList.toggle('active');
});