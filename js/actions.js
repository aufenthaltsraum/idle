AI.actions = {
  drinkTea : function() {
    var s = AI.state;
    if (s.tea >= 1 && s.drinkingTea <= 0) {
      s.tea -= 1;
      s.cups += s.people.length;
      s.drinkingTea = 60000;
    }
  }
};
