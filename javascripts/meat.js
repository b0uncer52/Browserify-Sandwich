"use strict";

  // Private variable to store the different meat prices
  var meatPrices = {"salami": 1.00, "ham": 1.50, "turkey": 1.50, "roast beef": 1.75};

  // Augment the original object with another method
  let addMeat = function(meat) {
  	var price = 0;
  	for(let kind in meatPrices) {
  		if(meat == kind) {
  			price = meatPrices[kind];
  		}
  	}
  	return price;
  };

  // Return the new, augmented object with the new method on it
module.exports = {addMeat};