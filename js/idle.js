var People = function (w) {
  this.nextId = 0;
  this.who = [];
  this.who = w.map(this.newPerson, w);
};

People.prototype.newPerson = function (o) {
  return new Person(o, this.nextId++);
}

var Person = function (o, nextId) {
  this.update = new Date ();
  this.id = nextId;
  this.occupation = "exc";
  this.occupation = o;
  var ref = this;
  this.tick = function (delta) {
    if (ref.occupation === "exc") {
      return delta/1000;
    }
    else {
      return undefined;
    }
  };
};

(function () {
  var app = angular.module('idle', []);
  app.controller ('IdleController',  function ($interval) {
    this.exercises = 0;
    this.cups = 0;
    this.tea = 5;
    this.update = new Date();
    this.people = new People(["exc", "exc"]);
    var ref = this;
    this.tick = function () {
      var update = new Date ();
      var delta = update - ref.update;
      ref.update = update;
      var i;
      for (i = 0; i < ref.people.who.length; i++) {
        if (ref.people.who[i].occupation === "exc") {
          ref.exercises += ref.people.who[i].tick(delta);
        }
        else {
          ; // buying tea, ...
        }
      };
    }
    $interval(this.tick,100);
  });
  
  app.filter('floor', function (){ 
    return function (input){
      return Math.ceil(input); 
    }
  });
})();
  
