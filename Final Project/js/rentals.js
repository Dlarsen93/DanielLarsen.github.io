const myURL = 'https://github.com/Dlarsen93/DanielLarsen.github.io/Final20%Project/data/vehicles.json';

fetch(myURL)
  .then((response) => response.json())
  .then((prices) => {
    console.log(prices);


    //Fill in html with vehicle name 
    document.getElementById('met-name').textContent = prices.vehicles[0].name;
    document.getElementById('dio-name').textContent = prices.vehicles[1].name;
    document.getElementById('pcx-name').textContent = prices.vehicles[2].name;
    document.getElementById('atv-name').textContent = prices.vehicles[3].name;
    document.getElementById('4door-name').textContent = prices.vehicles[4].name;
    document.getElementById('2door-name').textContent = prices.vehicles[5].name;

    //Fill in html with number of persons allowed 
    document.getElementById('met-max').textContent = prices.vehicles[0].max_capacity;
    document.getElementById('dio-max').textContent = prices.vehicles[1].max_capacity;
    document.getElementById('pcx-max').textContent = prices.vehicles[2].max_capacity;
    document.getElementById('atv-max').textContent = prices.vehicles[3].max_capacity;
    document.getElementById('4door-max').textContent = prices.vehicles[4].max_capacity;
    document.getElementById('2door-max').textContent = prices.vehicles[5].max_capacity;

    //Fill in html with price for reserved half day
    document.getElementById('res-met-half').textContent = prices.vehicles[0].reservation_half;
    document.getElementById('res-dio-half').textContent = prices.vehicles[1].reservation_half;
    document.getElementById('res-pcx-half').textContent = prices.vehicles[2].reservation_half;
    document.getElementById('res-atv-half').textContent = prices.vehicles[3].reservation_half;
    document.getElementById('res-4door-half').textContent = prices.vehicles[4].reservation_half;
    document.getElementById('res-2door-half').textContent = prices.vehicles[5].reservation_half;

    //Fill in html with price for reserved full day
    document.getElementById('res-met-full').textContent = prices.vehicles[0].reservation_full;
    document.getElementById('res-dio-full').textContent = prices.vehicles[1].reservation_full;
    document.getElementById('res-pcx-full').textContent = prices.vehicles[2].reservation_full;
    document.getElementById('res-atv-full').textContent = prices.vehicles[3].reservation_full;
    document.getElementById('res-4door-full').textContent = prices.vehicles[4].reservation_full;
    document.getElementById('res-2door-full').textContent = prices.vehicles[5].reservation_full;

    //Fill in html with price for walk ins half day
    document.getElementById('in-met-half').textContent = prices.vehicles[0].walkin_half;
    document.getElementById('in-dio-half').textContent = prices.vehicles[1].walkin_half;
    document.getElementById('in-pcx-half').textContent = prices.vehicles[2].walkin_half;
    document.getElementById('in-atv-half').textContent = prices.vehicles[3].walkin_half;
    document.getElementById('in-4door-half').textContent = prices.vehicles[4].walkin_half;
    document.getElementById('in-2door-half').textContent = prices.vehicles[5].walkin_half;

    //Fill in html with price for walk ins full day
    document.getElementById('in-met-full').textContent = prices.vehicles[0].walkin_full;
    document.getElementById('in-dio-full').textContent = prices.vehicles[1].walkin_full;
    document.getElementById('in-pcx-full').textContent = prices.vehicles[2].walkin_full;
    document.getElementById('in-atv-full').textContent = prices.vehicles[3].walkin_full;
    document.getElementById('in-4door-full').textContent = prices.vehicles[4].walkin_full;
    document.getElementById('in-2door-full').textContent = prices.vehicles[5].walkin_full;

  });