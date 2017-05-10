"use strict";
// This SandwichMaker IIFE augments the original one
  // Private variable to store the different meat prices
  var condimentPrices = {"mustard": 0, "ketchup": 0, "mayo": 0, "sriracha": 0.50};

  // Augment the original object with another method
  let addCondiment = function(condiment) {
    var price = 0;
  	for(let kind in condimentPrices) {
  		if(condiment == kind) {
  			price = condimentPrices[kind];
  		}
  	}
  	return price;
  };
 module.exports = {addCondiment};