AI.State = function() {
  this.exercises = 0;
  this.people = ["exc", "exc"];
  this.tea = 5;
  this.drinkingTea = 0;
  this.cups = 0;
  this.update = new Date();
};

AI.State.prototype.toHTML = function() {
  var html = "";
  html += "Exercises Solved: " + Math.floor(this.exercises) + "<br/>";
  html += "People:";
  for (i = 0; i < this.people.length; i++) {
    html += " " + this.people[i] + (i == this.people.length - 1 ? "" : ",");
  }
  html += "<br/>";
  html += "Tea: " + Math.floor(this.tea);
  if (this.drinkingTea > 0) {
    html += ", drinking for " +  Math.floor(this.drinkingTea / 1000.0) +
      " more seconds";
  }
  html += "<br/>";
  html += "Dirty Cups: " + Math.floor(this.cups) + "<br/>";
  html += "Last Update: " + this.update;
  return html;
};
