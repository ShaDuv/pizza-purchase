//-------------Bussiness Logic----------//
// -- Pizza Constructor -- //
function PizzaConst() {
  this.base = 4.00;
  this.addonsArray = [];
  this.total = 0;
  this.size = 'small';
};
function ClientConst(firstN, lastN, phone, address) {
  this.firstName = firstN;
  this.lastName = lastN;
  this.phone = phone;
  this.address= address;
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
  olives: 0.50,
  mushrooms: 0.25
};

const sizes = {
  small: 1.00,
  medium: 2.00,
  large: 3.00
};

var newPizza = new PizzaConst();

//-------------User Logic--------------//
$(document).ready(function() {
    // for (i = 0; i < addons; i++) {
    //   var toppingBtns = $('<input type="checkbox" name="addons" value="' + addons[i] + '">' + addons[i]);
    //   ('<input type="radio" name="rbtnCount" />');
    //   toppingBtns.appendTo('#toppings');
    // };
    $('form').click(function() {
      newPizza.addonsArray = [];
      $("input[name='addons']:checked").each(function() {
        newPizza.addToPizza($(this).val());
      });
      $("input[name='sizes']:checked").each(function() {
        newPizza.setSize($(this).val());
      });
      newPizza.calculatePrice();
    });

    $('#magic-pizza-button').click(function(event) {
      var firstN = $("input#first").val()
      var lastN = $("input#last").val()
      var phone = $("input#phone").val()
      var address = $("input#address").val()
      var newClient = new ClientConst(firstN, lastN, phone, address);
      $(".output").append("Your order has been placed. Your pizza will be delieverd to " + firstN + " " + lastN + ' and your total will be ' + newPizza.total);
      console.log(firstN)
      event.preventDefault();

    });


  }); //closes doc ready
