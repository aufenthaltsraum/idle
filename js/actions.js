AI.actions = {
  drinkTea : function() {
    var s = AI.state;
    if (s.tea >= 1 && s.drinkingTea <= 0) {
      s.tea -= 1;
      s.cups += 1;
      $("#cups").html(Math.floor(s.cups));
      s.drinkingTea = 60000;
      $("#drink-tea").remove();
      return true;
    }
    else {
      return false;
    }
  }
};
