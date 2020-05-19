// Storage Controller

// Item Controller
const ItemCtrl = (function() {
  // Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure / State
  const data = {
    items: [
      { id: 0, name: "Rajma Chawal", calories: 1200 },
      { id: 0, name: "Chole Chawal", calories: 1200 },
      { id: 0, name: "Curry Chawal", calories: 1200 }
    ],
    currentItem: null,
    totalCalories: 0
  };

  // whatever we return from module is gonna be public
  return {
    logData: function() {
      return data;
    }
  };
})();

// UI Controller
const UICtrl = (function() {})();

// App Controller
const App = (function(ItemCtrl, UICtrl) {
  // returns 1 function that's inti, it is the initializer for the app. 1 thing that we need to run right away when our application loads.

  return {
    init: function() {
      console.log("Initializing app");
    }
  };
})(ItemCtrl, UICtrl);

// Initialize app
App.init();
