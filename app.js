'use strict';
//global variables
var form = document.getElementById('store_form');
var table = document.getElementById('store_data');

//constructor function
function Store(name, minCust, maxCust, avgSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.hourlySales = ['<td>' + name + '</td>'];
}

//prototype chain methods
Store.prototype.custPerHour = function() {
  var customers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  return customers;
};

//an array of sales by the hour ranging 14 hours
Store.prototype.salesByHour = function() {
  var total = 0;
  for (var i = 0; i < 14; i++) {
    var sales = this.custPerHour() * this.avgSales;
    this.hourlySales.push('<td>' + Math.ceil(sales) + '</td>');
    total += Math.ceil(sales);
  }
  this.hourlySales.push('<td>' + total + '</td>');
};

Store.prototype.render = function() {
  var row =document.createElement('tr');
  row.innerHTML = this.hourlySales.join('');
  table.appendChild(row);
};

// the store objects pass in their arguments
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//array of the store loactions to be used in DOM building loops
var locations = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

function getSalesAndRender() {
  for (var k = 0; k < locations.length; k++) {
    locations[k].salesByHour();
    locations[k].render();
  }
}

getSalesAndRender();

//form submissions go here
function makeStore(event) {
  event.preventDefault();

  var name = event.target.name.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgSales = parseInt(event.target.avgSales.value);

  var addStore = new Store(name, minCust, maxCust, avgSales);
  addStore.salesByHour();
  addStore.render();
  form.reset();
}

form.addEventListener('submit', makeStore);
