let hambutton = document.querySelector('#ham');
let mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', function() {mainnav.classList.toggle('responsive')});

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

