var People = function (w) {
  var nextId = 0;
  this.who = w.map(function (o) {
    return {id: nextId++, occupation: o};
  });
  this.nextId = nextId;
};

(function () {
  var app = angular.module('idle', []);
  console.log("hello");
  app.controller ('IdleController', function () {
    this.exercises = 0;
    this.cups = 0;
    this.tea = 5;
    this.update = new Date();
    this.people = new People(["exc", "exc"]);
  });
})();
  
