"use strict";
  // Private variable to store the price
  var totalPrice = 0;
  var ingredients = [];

  // Return the public interface that other code can interact with
  let addTopping = function(toppingPrice, topping) {
    totalPrice += toppingPrice;
    ingredients.push(topping);
    return ingredients;
  };
  let getSandwich = function() {
    return ingredients.reduce(function(a, b) {
      return a + ", " + b;
    });
  };
  let getPrice = function() {
    return totalPrice;
  };
module.exports = {addTopping, getSandwich, getPrice};