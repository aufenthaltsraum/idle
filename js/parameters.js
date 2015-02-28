var parameters = {
  occupations : [
    {
      tag : 'exc',
      description : "solving exercises",
      tickFunction : function (ref, delta) {
        ref.exercises.increment(delta / 1000);
      }
    },
    {
      tag : 'tea',
      description : "buying tea",
      tickFunction : function (ref, delta) {
        ref.tea.increment(delta / 1000);
      }
    }
  ],
  findOccupation : function (tag) {
    var i;
    for (i = 0; i < parameters.occupations.length; i++) {
      if (parameters.occupations[i].tag === tag) {
        return parameters.occupations[i];
      }
    }
    return null;
  }
};

