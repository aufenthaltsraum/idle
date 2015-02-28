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
    this.parameters = parameters;
    this.room = room;

    this.tick = function () {
      var i = 0;
      var update = new Date();
      var delta = update - room.update;
      for (i = 0; i < room.ticks.length; i++) {
         room.ticks[i].fct(room, delta, room.ticks[i].id);
      }
      for (i = 0; i < room.people.length; i++) {
         var j;
         var p = room.people[i];
         for (j = 0; j < p.statuses.length; j++) {
           p.statuses[j].remaining -= delta;
           if (p.statuses[j].remaining <= 0) {
             var s, id;
             p.statuses[j].end(room);
             id = p.statuses[j].id;
             s = p.statuses.pop();
             if (s.id !== id) {
               p.statuses[j] = s;
             }
           }
         }
      }
      room.update = update;
    }

    $interval(this.tick,100);
  });
})();
