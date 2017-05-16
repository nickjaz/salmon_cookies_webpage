'use strict';

var timesOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm:', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

function createList(location) {
  var container = document.createElement('div'); // make a container
  container.innerHTML = '<h2>' + location.name + '</h2>';
  document.body.appendChild(container);

  var pairsList = []; // combining the the location sales array with the time of day array

  for (var k = 0; k < 16; k++) {
    pairsList.push(timesOfDay[k] + location.salesByHour()[k] + ' cookies');
  }

  var list= document.createElement('ul'); // create the list html
  var listArr = [];

  for (var m = 0; m < 16; m++) { //loops the list array to
    listArr.push('<li>' + pairsList[m] + '</li>');
  }

  var full_list = listArr.join('');
  list.innerHTML = full_list;
  document.body.appendChild(list);
}

var firstAndPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
  custPerHour: function() {
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers);
    return customers;
  },
  salesByHour: function() { //an array of sales by the hour ranging 15 hours
    var hourlySales = [];
    for (var i = 0; i < 15; i++) {
      var sales = this.custPerHour() * this.avgSales;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0; //adds the sales per hour together with for loop
    for (var j = 0; j < 15; j++) {
      totalSales = hourlySales[j] + totalSales;
    }
    hourlySales.push(totalSales); //pushes total to end of the array
    //console.log(hourlySales);
    return hourlySales;
  }
};

var seaTacAirport = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSales: 1.2,
  custPerHour: function() {
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers);
    return customers;
  },
  salesByHour: function() { //an array of sales by the hour ranging 14 hours
    var hourlySales = [];
    for (var i = 0; i < 15; i++) {
      var sales = this.custPerHour() * this.avgSales;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0; //adds the sales per hour together with for loop
    for (var j = 0; j < 15; j++) {
      totalSales = hourlySales[j] + totalSales;
    }
    hourlySales.push(totalSales); //pushes total to end of the array
    //console.log(hourlySales);
    return hourlySales;
  }
};

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSales: 3.7,
  custPerHour: function() {
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers);
    return customers;
  },
  salesByHour: function() { //an array of sales by the hour ranging 14 hours
    var hourlySales = [];
    for (var i = 0; i < 15; i++) {
      var sales = this.custPerHour() * this.avgSales;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0; //adds the sales per hour together with for loop
    for (var j = 0; j < 15; j++) {
      totalSales = hourlySales[j] + totalSales;
    }
    hourlySales.push(totalSales); //pushes total to end of the array
    //console.log(hourlySales);
    return hourlySales;
  }
};

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSales: 2.3,
  custPerHour: function() {
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers);
    return customers;
  },
  salesByHour: function() { //an array of sales by the hour ranging 14 hours
    var hourlySales = [];
    for (var i = 0; i < 15; i++) {
      var sales = this.custPerHour() * this.avgSales;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0; //adds the sales per hour together with for loop
    for (var j = 0; j < 15; j++) {
      totalSales = hourlySales[j] + totalSales;
    }
    hourlySales.push(totalSales); //pushes total to end of the array
    //console.log(hourlySales);
    return hourlySales;
  }
};

var alki = {
  name: 'Alki',
  minCust: 11,
  maxCust: 38,
  avgSales: 3.7,
  custPerHour: function() {
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(customers);
    return customers;
  },
  salesByHour: function() { //an array of sales by the hour ranging 14 hours
    var hourlySales = [];
    for (var i = 0; i < 15; i++) {
      var sales = this.custPerHour() * this.avgSales;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0; //adds the sales per hour together with for loop
    for (var j = 0; j < 15; j++) {
      totalSales = hourlySales[j] + totalSales;
    }
    hourlySales.push(totalSales); //pushes total to end of the array
    //console.log(hourlySales);
    return hourlySales;
  }
};

createList(firstAndPike);

createList(seaTacAirport);

createList(seattleCenter);

createList(capitolHill);

createList(alki);
