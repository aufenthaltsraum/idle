var People = function (w) {
  var nextId = 0;
  this.who = w.map(function (o) {
    return {id: nextId++, occupation: o};
  });
  this.nextId = nextId;
};

People.prototype.addPerson = function (o) {
  var nextId = this.nextId;
  this.who[this.who.length] = {id: nextId++, occupation: o};
  this.nextId = nextId;
  return this;
};


People.prototype.changeOccupation = function (id, o) {
  var i;
  for (i = 0; i < this.who.length; i++) {
    if (this.who[i].id == id) {
      this.who[i].occupation = o;
      return id;
    }
  }
  return undefined;
}

function () {
  var app = angular.module('IdleApp', [])
  
  app.controller ('IdleController, function () {
    this.exercises = 0;
    this.cups = 0;
    this.tea = 5;
    this.update = new Date();
    this.people = new People(["exc", "exc"]);
  });
};
  
