//-------------Bussiness Logic----------//
// -- Pizza Constructor -- //
function PizzaConst() {
  this.base = 4.00;
  this.addonsArray = [];
  this.total = 0;
  this.size = 'small';
};

PizzaConst.prototype.addToPizza = function(addons) {
  this.addonsArray.push(addons);
};

PizzaConst.prototype.setSize = function(size) {
  this.size = size;
};


PizzaConst.prototype.calculatePrice = function() {
  this.total = this.base;
  for (i = 0; i < this.addonsArray.length; i++) {
    this.total = this.total + addons[this.addonsArray[i]];
  }
  this.total = this.total + sizes[this.size];
};
const addons = {
  cheese: 0.75,
  pepperoni: 0.75,
  chicken: 2.00,
  bacon: 1.00,
  peppers: 0.25,
  olives: 0.50
};

const sizes = {
  small: 1.00,
  medium: 2.00,
  large: 3.00
};

var newPizza = new PizzaConst();

//-------------User Logic--------------//
$(document).ready(function() {
    $('form').click(function() {
      newPizza.addonsArray = [];
      $("input[name='addons']:checked").each(function() {
        newPizza.addToPizza($(this).val());
      });
      $("input[name='sizes']:checked").each(function() {
        newPizza.setSize($(this).val());
      });
      newPizza.calculatePrice();
      console.log(newPizza.total);
    });

    // for (i = 0; i < addons; i++) {
    //   $('.toppings').append('<input type="checkbox" name="addons" value="' + addon[i] + '">' + addon[i]);
    // };

  }); //closes doc ready
