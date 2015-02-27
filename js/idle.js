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
    else if (ref.occupation === "tea") {
      return delta/100000;
    }
    else {
      console.alert ("occupation " + ref.people.who[i].occupation + " not known in function Person.tick");
      return undefined;
    }
  };
};

(function () {
  var app = angular.module('idle', []);
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
    this.exercises = 0;
    this.cups = 0;
    this.tea = 5;
    this.update = new Date();
    this.people = new People(["exc", "exc"]);
    this.occupationList = [["exc","solving exercises"],["tea","buying tea"]];
    //
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
        else if (ref.people.who[i].occupation === "tea") {
          ref.tea += ref.people.who[i].tick(delta);
        }
        else {
          window.alert ("occupation " + ref.people.who[i].occupation + " not known in function IdleControler.tick");
        }
      };
    }
    $interval(this.tick,100);
    this.text = function (o) {
      var i;
      for (i = 0; i < ref.occupationList.length; i++) {
        if (o === ref.occupationList[i][0])
          return ref.occupationList[i][1];
      };
      return undefined;
    };
  });
  
  app.controller("ChangeOccupationCtrl", function () {
    this.occupation = "Choose a new Occupation";
    this.occupations = ["exc","tea"];
    var ref = this;
    this.changeOccupation = function (person) {
      person.occupation = ref.occupation[0];
      ref.occupation = "Choose a new Occupation";
    };
  });
  
})();
  
