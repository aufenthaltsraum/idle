var Room = function () {
  this.update = new Date();
  this.nextId = 0;

  this.exercises = new Thing();
  this.cups = new Thing();
  this.tea = new Thing();

  this.people = [];
  this.ticks = [];

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

var room;
