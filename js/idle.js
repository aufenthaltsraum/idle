(function () {
  var app = angular.module('idle', []);
  room = new Room();
    // filters
  app.filter('floor', function (){ 
    return function (input){
      return Math.floor(input); 
    }
  });
  app.filter('ceil', function (){ 
    return function (input){
      return Math.ceil(input); 
    }
  });
  app.filter('occupationText', function (){ 
    return function (input){
      if (input == "exc") {
        return "solving exercises";
      }
      else if (input == "tea") {
        return "buying tea";
      }
      else {
        return undefined;
      }
    }
  });
    // controllers
  app.controller ('IdleController',  function ($interval) {
    this.room = room;
    //
    var ref = this.room;
    
    this.tick = function () {
      var i = 0;
      var update = new Date();
      var delta = update - ref.update;
      for (i = 0; i < ref.ticks.length; i++) {
         ref.ticks[i].fct(ref, delta);
      }
      ref.update = update;
    }
    $interval(this.tick,100);
    this.drink = function (){
      if (!(ref.tea.active) && ref.tea.amount > 0) {
        ref.tea.amount--;
        ref.tea.active = true;
        ref.tea.time = 60000;
        ref.cups++;
        ref.ticks.push(ref.tea.tick);
      }
    }
  });
  
  app.controller("ChangeOccupationCtrl", function () {
    this.occupation = "Choose a new Occupation";
    this.occupations = room.occupations;
    var ref = this;
    this.changeOccupation = function (person, tag) {
      person.occupation = ref.occupation;
      room.findTick("person" + person.id).fct = ref.occupation.tickFunction;
      ref.occupation = "Choose a new Occupation";
    };
  });
  
})();
