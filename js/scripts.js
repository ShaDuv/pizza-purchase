//-------------Bussiness Logic----------//
// -- Pizza Constructor -- //
function PizzaConst(initialPrice, toppings, size) {
  this.base = base,
  this.addons = [];
};

const addons = {
  cheese: 0.75,
  pepperoni: 0.75,
  chicken:  2.00,
  bacon:  1.00,
  peppers: 0.25,
  olives: 0.50,
  small:  1.00,
  medium: 2.00,
  large:  3.00
};

const baseprice = 4.00;


//-------------User Logic--------------//
$(document).ready(function() {
  console.log("jquery is working");
  $('#magic-pizza-button').click(function () {
    console.log("button click is working");
    function checkboxHandlers() {
      var checked = [];
      $("input[name = 'addons': checked").each(function() {
        checked.push($(this).val());
        console.log(checked);
      });
    };
  });
});
