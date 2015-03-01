"use strict";

var Room = function () {
  this.update = new Date();
  this.nextId = 0;

  this.exercises = new Thing();
  this.cups = new Thing();
  this.tea = new Thing();

  this.people = [];
  // TODO: move preset ticks to parameters
  this.ticks = [
    {
      id : 'l',
      fct : function (ref, delta, id) {
        var p = 0.005;
        // TODO: better probability handling
        if (ref.cups.amount >= 10 &&
              Math.random() < p * (1 - Math.pow(1 - p, delta)) / (1 - p)) {
          ref.cups.amount /= 2;
          ref.exercises.amount /= 2;
          ref.alerts.push({
            id : 'l' + ref.getNextId(), // TODO: another ID source?
            type : 'warning',
            description : "L has come!"
          });
        }
      }
    }
  ];
  this.alerts = [];

  this.addPerson('exc').addPerson('exc');
};

Room.prototype.getNextId = function () {
  var id = this.nextId;
  this.nextId++;
  return id;
};

Room.prototype.addPerson = function (tag) {
  var o = parameters.findOccupation(tag);
  var p = new Person(this.getNextId(), o);
  this.people.push(p);
  this.ticks.push(p.tick);
  return this;
};

Room.prototype.findTick = function (id) {
  var i;
  for (i = 0; i < this.ticks.length; i++) {
    if (this.ticks[i].id === id) {
      return this.ticks[i];
    }
  }
  return null;
};

Room.prototype.removeTick = function (id) {
  var i;
  for (i = 0; i < this.ticks.length; i++) {
    var temp;
    if (this.ticks[i].id === id && (temp = this.ticks.pop()).id !== id) {
      this.ticks[i] = temp;
      return this;
    }
  }
  return this;
};

Room.prototype.removeAlert = function (id) {
  var i;
  for (i = 0; i < this.alerts.length; i++) {
    var temp;
    if (this.alerts[i].id === id && (temp = this.alerts.pop()).id !== id) {
      this.alerts[i] = temp;
      return this;
    }
  }
  return this;
};

var room;
