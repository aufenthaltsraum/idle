AI.tick = function() {
  var i;
  var now = new Date();
  var s = AI.state;
  var delta = now - s.update;
  s.update = now;
  s.exercises += (delta / (s.drinkingTea > 0 ? 1000.0 : 5000.0)) * s.people.occupations.exc;
  $("#exercises").html(Math.floor(s.exercises));
  s.tea += (delta / 5000.0) * s.people.occupations.tea;
  $("#tea").html(Math.floor(s.tea));
  s.drinkingTea -= delta;
  if (s.drinkingTea > 0) {
    var status = "(drinking for " +  Math.floor(s.drinkingTea / 1000.0) +
      " more seconds)";
    var elems = $("#drinking-tea");
    if (elems.length) {
      elems.html(status);
    }
    else {
      $("#tea-container").append("<a id=\"drinking-tea\">" + status + "</a>");
    }
  }
  else {
    if (s.tea >= 1 && !$("#drink-tea").length) {
      var e = "<a id=\"drink-tea\" onclick=\"AI.actions.drinkTea()\" " +
        "href=\"#\">drink some</a>";
      $("#tea-container").append(e);
    }
  }
  if (s.drinkingTea <= 0) {
    $("#drinking-tea").remove();
    s.drinkingTea = 0;
  }
};
