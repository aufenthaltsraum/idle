var Thing = function () {
  this.amount = 0;
  this.factor = 1.0;
}

Thing.prototype.increment = function (diff) {
  this.amount += this.factor * diff;
}

var Activatable = function (tickId, tickFunction) {
  var a = new Thing();
  a.active = false;
  a.time = 0;
  a.tick = {
    id : tickId,
    fct : tickFunction
  };
  return a;
}

var parameters = {
  occupations : [
    {
      tag : 'exc',
      description : "solving exercises",
      tickFunction : function (ref, delta) {
        ref.exercises.increment(delta / 1000);
      }
    },
    {
      tag : 'tea',
      description : "buying tea",
      tickFunction : function (ref, delta) {
        ref.tea.increment(delta / 1000);
      }
    }
  ]
}

