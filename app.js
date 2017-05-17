'use strict';

//created the table header here
function createTableHead() {
  var thead = document.getElementById('thead');
  var headValues = ['','6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total'];

  // creates the newHead to be used to build the DOM
  var newHead;

  //loops the headValues in the array above and puts them in the DOM table head
  for (var a = 0; a < headValues.length; a++) {
    newHead = document.createElement('td');
    newHead.innerHTML = headValues[a];
    thead.appendChild(newHead);
  }
}
//constructor function
function Store(name, minCust, maxCust, avgSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.hourlySales = [];
}

//prototype chain methods
Store.prototype.custPerHour = function() {
  var customers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  return customers;
};

//an array of sales by the hour ranging 14 hours
Store.prototype.salesByHour = function() {
  for (var i = 0; i < 14; i++) {
    var sales = this.custPerHour() * this.avgSales;
    this.hourlySales.push(Math.ceil(sales));
  }

  //adds the sales per hour together with the loop
  var totalSales = 0;
  for (var j = 0; j < this.hourlySales.length; j++) {
    totalSales = this.hourlySales[j] + totalSales;
  }
  this.hourlySales.push(totalSales); //pushes total to end of the array
  return this.hourlySales;
};

// the store objects pass in their arguments
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//array of the store loactions to be used in DOM building loops
var locations = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

for (var k = 0; k < locations.length; k++) {
  locations[k].salesByHour();
}

//filling out the bulk of the table by looping the objects values and assigning them to a data array
var table = document.getElementById('shell');
var data = [];

for (var m = 0; m < locations.length; m++) {
  var dataList = '<td>' + locations[m].name + '</td>';
  for (var n = 0; n < 15; n++) {
    dataList = dataList + '<td>' + locations[m].hourlySales[n] + '</td>';
  }
  data.push(dataList);
}

//calculating the grand total of all store sales for each an hour
var grandTotal = [];
for (var x = 0; x <15; x++) {
  grandTotal.push(
    locations[0].hourlySales[x] +
    locations[1].hourlySales[x] +
    locations[2].hourlySales[x] +
    locations[3].hourlySales[x] +
    locations[4].hourlySales[x]
  );
}

//assembling the grand total for the table
var grandDataList = '<td>' + 'Totals' + '</td>';
for (var y = 0; y < 15; y++) {
  grandDataList = grandDataList + '<td>' + grandTotal[y] + '</td>';
}
data.push(grandDataList);

//placing all the data collected in the data array into the DOM
var newRow;

for (var z = 0; z < data.length; z++) {
  newRow = document.createElement('tr');
  newRow.innerHTML = data[z];
  table.appendChild(newRow);
}
