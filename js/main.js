const navhome = document.querySelector('.nav-home');
const navAbout = document.querySelector('.nav-about');
const navProjects = document.querySelector('.nav-projects');
const navContact = document.querySelector('.nav-contact');
const navLogin = document.querySelector('.nav-login');


navhome.addEventListener('click', function () {
    mainContent.innerHTML = '';

    // ändrar backgrunden till svart 
    document.body.style.backgroundColor = 'black';
    // ändrar texten till vit
    document.body.style.color = 'white';

    
    home();
});

navAbout.addEventListener('click', function () {
    mainContent.innerHTML = '';
    about();
});