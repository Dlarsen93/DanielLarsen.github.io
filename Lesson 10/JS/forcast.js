const apiURL = 'api.openweathermap.org/data/2.5/forecast?id=56044&units=imperial&appid=cc2a9728fbac4669b86898fecbccc39b';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject); //be sure to delete this before submitting!

    


});
