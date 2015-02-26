AI.People = function (w) {
  var nextId = 0;
  this.who = w.map(function (o) {
    return {id: nextId++, occupation: o};
  });
  this.nextId = nextId;
  this.occupations = {
    exc: this.occupiedWith("exc"),
    tea: this.occupiedWith("tea")
  };
};

/*AI.People.prototype.addPerson (o) {
  
}*/

AI.People.prototype.occupiedWith = function (o) {
  var n = 0;
  for (i = 0; i < this.who.length; i++) {
    if (this.who[i].occupation == o) {
      n++;
    }
  }
  return n;
};

AI.State = function () {
  this.exercises = 0;
  this.people = new AI.People(["exc", "exc"]);
  this.tea = 5;
  this.drinkingTea = 0;
  this.cups = 0;
  this.update = new Date();
};
