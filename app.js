'use strict';
//
// var timesOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm:', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

// function createList(location) {
//   var container = document.createElement('div'); // make a container
//   container.innerHTML = '<h2>' + location.name + '</h2>';
//   document.body.appendChild(container);
//
//   var pairsList = []; // combining the the location sales array with the time of day array
//
//   for (var k = 0; k < 16; k++) {
//     pairsList.push(timesOfDay[k] + location.salesByHour()[k] + ' cookies');
//   }
//
//   var list= document.createElement('ul'); // create the list html
//   var listArr = [];
//
//   for (var m = 0; m < 16; m++) { //loops the list array to
//     listArr.push('<li>' + pairsList[m] + '</li>');
//   }
//
//   var full_list = listArr.join('');
//   list.innerHTML = full_list;
//   document.body.appendChild(list);
// }

function Store(name, minCust, maxCust, avgSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
}

Store.prototype.custPerHour = function() {
  var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  console.log(customers);
  return customers;
};

Store.prototype.salesByHour = function() { //an array of sales by the hour ranging 14 hours
  var hourlySales = [];
  for (var i = 0; i < 14; i++) {
    var sales = this.custPerHour() * this.avgSales;
    hourlySales.push(Math.ceil(sales));
  }
  var totalSales = 0; //adds the sales per hour together with for loop
  for (var j = 0; j < 14; j++) {
    totalSales = hourlySales[j] + totalSales;
  }
  hourlySales.push(totalSales); //pushes total to end of the array
  // console.log(hourlySales);
  return hourlySales;
};



var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var locations = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

var table = document.getElementById('shell');
var data = [];

for (var k = 0; k < locations.length; k++) {
  data.push(
    '<td>' + locations[k].name + '</td>' +
    '<td>' + locations[k].salesByHour()[0] + '</td>' +
    '<td>' + locations[k].salesByHour()[1] + '</td>' +
    '<td>' + locations[k].salesByHour()[2] + '</td>' +
    '<td>' + locations[k].salesByHour()[3] + '</td>' +
    '<td>' + locations[k].salesByHour()[4] + '</td>' +
    '<td>' + locations[k].salesByHour()[5] + '</td>' +
    '<td>' + locations[k].salesByHour()[6] + '</td>' +
    '<td>' + locations[k].salesByHour()[7] + '</td>' +
    '<td>' + locations[k].salesByHour()[8] + '</td>' +
    '<td>' + locations[k].salesByHour()[9] + '</td>' +
    '<td>' + locations[k].salesByHour()[10] + '</td>' +
    '<td>' + locations[k].salesByHour()[11] + '</td>' +
    '<td>' + locations[k].salesByHour()[12] + '</td>' +
    '<td>' + locations[k].salesByHour()[13] + '</td>' +
    '<td>' + locations[k].salesByHour()[14] + '</td>');
}

var newRow;

for (var m = 0; m < data.length; m++) {
  newRow = document.createElement('tr');
  newRow.innerHTML = data[m];
  table.appendChild(newRow);
}
