//-------------Bussiness Logic----------//
// -- Pizza Constructor -- //
function PizzaConst(initialPrice, checked) {
  this.base = 4.00;
  this.addonsArray = [];
  this.total = this.base;
};

PizzaConst.prototype.addToPizza = function(addons) {
  this.addonsArray.push(addons);
};

PizzaConst.prototype.calculatePrice = function() {
  for (i = 0; i < this.addonsArray.length; i++) {
    this.total = this.total + addons[this.addonsArray[i]];
  }
};
const addons = {
  cheese: 0.75,
  pepperoni: 0.75,
  chicken: 2.00,
  bacon: 1.00,
  peppers: 0.25,
  olives: 0.50,
  small: 1.00,
  medium: 2.00,
  large: 3.00
};
var newPizza = new PizzaConst();
// var checked = [];
//-------------User Logic--------------//
$(document).ready(function() {
  $('#magic-pizza-button').click(function() {
      $("input[name='addons']:checked").each(function() {
        newPizza.addToPizza($(this).val());
      });
      newPizza.calculatePrice();
      console.log(newPizza.total);
    });
    addons.forEach(function (x) {
        $('.form-group).html('Welcome ' + x.name + '!'); 
}); //closes doc ready
