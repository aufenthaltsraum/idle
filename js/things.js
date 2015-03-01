"use strict";

var Thing = function () {
  this.amount = 0;
  this.factor = 1.0;
};

Thing.prototype.increment = function (diff) {
  this.amount += this.factor * diff;
};

var Person = function (id, occupation) {
  var i;
  this.id = id;
  this.occupation = occupation;
  this.tick = {
    id : this,
    fct : occupation.tickFunction
  };
  this.statuses = [];
  this.factors = {};
  for (i = 0; i < parameters.occupations.length; i++) {
    this.factors[parameters.occupations[i].tag] = 1.0;
  }
};

Person.prototype.setOccupation = function (o) {
  this.occupation = o;
  this.tick.fct= this.occupation.tickFunction;
  return this;
};

Person.prototype.doAction = function (ref, action) {
  var p = this;
  this.statuses.push({
    id : ref.getNextId(), // TODO: use another ID source
    description : action.description,
    remaining : action.duration,
    duration : action.duration,
    end : function (ref) {
      action.deactivate(ref, p);
    }
  });
  action.activate(ref, this);
  return this;
};
