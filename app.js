(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
    toBuy.boughtItem = function (index) { ShoppingListCheckOffService.boughtItem(index);
    };
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var alreadyBuy = this;
   alreadyBuy.items = ShoppingListCheckOffService.getItemsBought();

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      { name: "cookies", quantity: 10 },
      { name: "Chocolate", quantity: 15 },
      { name: "Milk", quantity: 20 },
      { name: "Donuts", quantity: 30 },
      { name: "Peanut Butter", quantity: 40 }
    ];

    var itemsBought = [];
    
    service.boughtItem = function (index) {
      itemsBought.push(itemsToBuy[index]);
      itemsToBuy.splice(index, 1);
    }


    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };


  }

})();
