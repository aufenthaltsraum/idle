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
    // controllers
  app.controller ('IdleController',  function ($interval) {
    this.room = room;

    this.tick = function () {
      var i = 0;
      var update = new Date();
      var delta = update - room.update;
      for (i = 0; i < room.ticks.length; i++) {
         room.ticks[i].fct(room, delta);
      }
      room.update = update;
    }
    $interval(this.tick,100);

    this.drink = function (){
      if (!(room.tea.active) && room.tea.amount >= 1) {
        room.tea.amount--;
        room.tea.active = true;
        room.tea.time = 60000;
        room.cups.increment(1);
        room.exercises.factor *= 2;
        room.ticks.push(room.tea.tick);
      }
    }
  });

  app.controller("ChangeOccupationCtrl", function () {
    this.occupation = "Choose a new Occupation";
    this.occupations = parameters.occupations;
    var ref = this;
    this.changeOccupation = function (person, tag) {
      person.occupation = ref.occupation;
      room.findTick("person" + person.id).fct = ref.occupation.tickFunction;
      ref.occupation = "Choose a new Occupation";
    };
  });

})();
