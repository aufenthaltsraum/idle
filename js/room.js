var Room = function () {
    this.update = new Date();
    this.exercises = 0;
    this.tea = {
      amount : 5,
      active : false,
      time : 0,
      tick : {
        id : 'tea',
        fct : function (ref, delta) {
          var time = ref.tea.time;
          if (time > 0) {
            ref.tea.time = time - delta > 0 ? time - delta : 0;
            ref.tea.time -= time - ref.tea.time;
          }
          else {
            ref.tea.active = false;
            ref.tea.time = 0;
            ref.removeTick('tea');
          }
        }
      }
    }
    this.cups = 0;
    this.nextId = 0;
    this.occupations = [
      {
        tag : 'exc',
        description : "solving exercises",
        tickFunction : function (ref, delta) {
          ref.exercises += delta / 1000;
        }
      },
      {
        tag : 'tea',
        description : "buying tea",
        tickFunction : function (ref, delta) {
          ref.tea.amount += delta / 100000;
        }
      }
    ]
    this.people = [];
    this.ticks = [];
    this.addPerson('exc').addPerson('exc');
};

Room.prototype.addPerson = function (tag) {
  var o = this.findOccupation(tag);
  this.people.push({
    id : this.nextId,
    occupation : o
  });
  this.ticks.push({
    id : 'person' + this.nextId,
    fct : o.tickFunction
  });
  this.nextId++;
  return this;
}

Room.prototype.findOccupation = function (tag) {
  var i;
  for (i = 0; i < this.occupations.length; i++) {
    if (this.occupations[i].tag === tag) {
      return this.occupations[i];
    }
  }
  return null;
}

Room.prototype.findTick = function (id) {
  var i;
  for (i = 0; i < this.ticks.length; i++) {
    if (this.ticks[i].id === id) {
      return this.ticks[i];
    }
  }
  return null;
}

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
}

var room;
