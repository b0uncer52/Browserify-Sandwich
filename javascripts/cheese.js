"use strict";
// This SandwichMaker IIFE augments the original one

  // Private variable to store the different meat prices
  var cheesePrices = {"swiss": 0.50, "cheddar": 0.50, "parmesan": 0.75, "Colby": 1.00};

  // Augment the original object with another method
  let addCheese = function(cheese) {
    var price = 0;
  	for(let kind in cheesePrices) {
  		if(cheese == kind) {
  			price = cheesePrices[kind];
  		}
  	}
  	return price;
  };

module.exports = {addCheese};