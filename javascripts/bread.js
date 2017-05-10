"use strict";
  // Private variable to store the different meat prices
  var breadPrices = {"white": 1.00, "wheat": 1.25, "rye": 1.50, "pretzel": 2.00};

  // Augment the original object with another method
  let addBread = function(bread) {
    var price = 0;
  	for(let kind in breadPrices) {
  		if(bread == kind) {
  			price = breadPrices[kind];
  		}
  	}
  	return price;
  };

module.exports = {addBread};