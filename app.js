'use strict';

var timesOfDay = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm', '6pm:', '7pm:', '8pm:']

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
  salesByHour: function() { //an array of sales by the hour ranging 14 hours
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
    for (var i = 0; i < 14; i++) {
      var sales = this.custPerHour() * this.avgSales;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0; //adds the sales per hour together with for loop
    for (var j = 0; j < 14; j++) {
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
    for (var i = 0; i < 14; i++) {
      var sales = this.custPerHour() * this.avgSales;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0; //adds the sales per hour together with for loop
    for (var j = 0; j < 14; j++) {
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
    for (var i = 0; i < 14; i++) {
      var sales = this.custPerHour() * this.avgSales;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0; //adds the sales per hour together with for loop
    for (var j = 0; j < 14; j++) {
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
    for (var i = 0; i < 14; i++) {
      var sales = this.custPerHour() * this.avgSales;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0; //adds the sales per hour together with for loop
    for (var j = 0; j < 14; j++) {
      totalSales = hourlySales[j] + totalSales;
    }
    hourlySales.push(totalSales); //pushes total to end of the array
    //console.log(hourlySales);
    return hourlySales;
  }
};
