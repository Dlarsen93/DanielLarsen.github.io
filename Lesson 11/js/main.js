document.getElementById('ham').addEventListener('click', function() {document.querySelector('.navigation').classList.toggle('responsive')});
//Do I need the mainnav?
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

function saturdayBrunch() {
    var daynumber = new Date();

if (daynumber.getDay() == 5){
        document.getElementsByClassName("friday-alert");

    document.querySelector(".friday-alert").style.display = "block";
}
}