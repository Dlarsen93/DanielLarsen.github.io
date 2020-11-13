document.getElementById('ham').addEventListener('click', function() {document.querySelector('.navigation').classList.toggle('responsive')});

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
