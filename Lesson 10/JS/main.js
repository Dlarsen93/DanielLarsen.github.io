document.getElementById('ham').addEventListener('click', function() {document.querySelector('.navigation').classList.toggle('responsive')});

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

//const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
//document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
//document.getElementById("copyright-year").innerText = new Date().getFullYear();

function saturdayBrunch() {
    var daynumber = new Date();

if (daynumber.getDay() == 5){
        document.getElementsByClassName("friday-alert");

    document.querySelector(".friday-alert").style.display = "block";
}
}