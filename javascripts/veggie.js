"use strict";

  // Private variable to store the different meat prices
  var veggiePrices = {"tomato": 0, "lettuce": 0, "avocado": 1.00, "onion": 0};

  // Augment the original object with another method
  let addVeggie = function(veg) {
    var price = 0;
  	for(let kind in veggiePrices) {
  		if(veg == kind) {
  			price = veggiePrices[kind];
  		}
  	}
  	return price;
  };
module.exports = {addVeggie};