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

