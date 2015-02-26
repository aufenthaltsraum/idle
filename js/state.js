AI.People = function (w) {
  var i;
  var nextId = 0;
  this.who = w.map(function (o) {
    return {id: nextId++, occupation: o};
  });
  this.nextId = nextId;
  this.occupations = {};
  for (i = 0; i < AI.People.occupationList.length; i++) {
    this.occupations[AI.People.occupationList[i].tag] =
      this.occupiedWith(AI.People.occupationList[i].tag);
  }
};

AI.People.prototype.addPerson = function (o) {
  var nextId = this.nextId;
  this.who[this.who.length] = {id: nextId++, occupation: o};
  this.nextId = nextId;
  this.occupations[o]++;
  this.draw();
  return this;
};

AI.People.prototype.occupiedWith = function (o) {
  var i;
  var n = 0;
  for (i = 0; i < this.who.length; i++) {
    if (this.who[i].occupation == o) {
      n++;
    }
  }
  return n;
};

AI.People.prototype.changeOccupation = function (id, o) {
  var i;
  for (i = 0; i < this.who.length; i++) {
    if (this.who[i].id == id) {
      this.occupations[this.who[i].occupation]--;
      this.who[i].occupation = o;
      this.occupations[this.who[i].occupation]++;
      this.draw();
      return id;
    }
  }
  return undefined;
}

AI.People.prototype.draw = function () {
  $(".person").remove();
  for (i = 0; i < this.who.length; i++) {
    var j;
    var element = "<li class=\"person\">";
    var others = "";
    for (j = 0; j < AI.People.occupationList.length; j++) {
      if (this.who[i].occupation == AI.People.occupationList[j].tag) {
        element += AI.People.occupationList[j].description;
      }
      else {
        var click = "\"AI.state.people.changeOccupation(" + this.who[i].id +
          ",'" + AI.People.occupationList[j].tag +  "')\"";
        others += " <a onclick=" + click + " href=\"#\">" +
          AI.People.occupationList[j].tag + "</a>";
      }
    }
    element += others + "</li>";
    $("#people").append(element);
  }
}

AI.People.occupationList = [
  {
    tag : "exc",
    description: "solving exercises"
  },
  {
    tag : "tea",
    description : "buying tea"
  }
];

AI.State = function () {
  this.exercises = 0;
  this.people = new AI.People(["exc", "exc"]);
  this.tea = 5;
  this.drinkingTea = 0;
  this.cups = 0;
  this.update = new Date();
};
