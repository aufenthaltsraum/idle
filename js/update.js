AI.tick = function() {
  var now = new Date();
  var s = AI.state;
  var delta = now - s.update;
  var productives = 0;
  var teaBuyers = 0;
  s.update = now;
  $(".person").remove();
  for (i = 0; i < s.people.length; i++) {
    var occupation, element;
    switch (s.people[i]) {
      case "exc":
        occupation = "solving exercises"
        productives++;
        break;
      case "tea":
        occupation = "buying tea"
        teaBuyers++;
        break;
      default:
        break;
    }
    element = "<li class=\"person\">" + occupation + "</li>";
    $("#people").append(element);
  }
  s.exercises += (delta / (s.drinkingTea > 0 ? 1000.0 : 5000.0)) * productives;
  $("#exercises").html(Math.floor(s.exercises));
  s.tea += (delta / 10000.0) * teaBuyers;
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
