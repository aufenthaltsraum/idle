AI.tick = function() {
  var now = new Date();
  var s = AI.state;
  var delta = now - s.update;
  var productives = 0;
  var teaBuyers = 0;
  s.update = now;
  for (i = 0; i < s.people.length; i++) {
    switch (s.people[i]){
      case "exc":
        productives++;
        break;
      case "tea":
        teaBuyers++;
        break;
      default:
        break;
    }
  }
  s.exercises += (delta / (s.drinkingTea > 0 ? 1000.0 : 5000.0)) * productives;
  s.tea += (delta / 10000.0) * teaBuyers;
  if (s.drinkingTea <= 0) {
    s.drinkingTea = 0;
  }
  s.drinkingTea -= delta;
  document.getElementsByTagName("body")[0].innerHTML = s.toHTML();
};
