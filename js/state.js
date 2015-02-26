AI.State = function() {
  this.exercises = 0;
  this.people = ["exc", "exc"];
  this.occupations = {};
  for (i = 0; i < this.people.length; i++) {
    if (!(this.occupations.hasOwnProperty(this.people[i]))) {
      this.occupations[this.people[i]] = 0;
    }
    this.occupations[this.people[i]]++;
  }
  this.tea = 5;
  this.drinkingTea = 0;
  this.cups = 0;
  this.update = new Date();
};
