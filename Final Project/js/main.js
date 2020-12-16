document.getElementById('ham').addEventListener('click', function() {document.querySelector('.navigation').classList.toggle('responsive')});
//Do I need the mainnav?
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};