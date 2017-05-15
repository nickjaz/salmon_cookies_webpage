'use strict';

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
  salesPerHour: function() {
    var sales = this.custPerHour * this.avgSales;
    console.log(sales);
    return sales;
  }

};
