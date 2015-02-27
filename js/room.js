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

var Room = function () {
    this.exercises = 0;
    this.cups = 0;
    this.tea = 5;
    this.update = new Date();
    this.people = new People(["exc", "exc"]);
    this.occupationList = [["exc","solving exercises"],["tea","buying tea"]];
};

var room;
