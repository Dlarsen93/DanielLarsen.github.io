function calculateWindChill() {

    let temperature = parseFloat(document.getElementById('temperature').innerHTML)
    let speed       = parseFloat(document.getElementById('windSpeed').innerHTML)
    let factor      = windChill(temperature,speed)

    if (temperature <= 50 && speed > 3) {
        document.getElementById("windChill").innerHTML = factor + "&deg; F"
    } else {
        document.getElementById("windChill").innerHTML = "N/A"
    }

}

function findWindChill(t,s) {
    let f = 35.74 + 0.6215 * t - 35.75 * (s ** 0.16) + 0.4275 * t * (s ** 0.16)
    return Math.round(f)
}

calculateWindChill();