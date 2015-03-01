"use strict";

var parameters = {
  occupations : [
    {
      tag : 'exc',
      description : "solving exercises",
      tickFunction : function (ref, delta, id) {
        ref.exercises.increment(id.factors.exc * delta / 1000);
      }
    },
    {
      tag : 'tea',
      description : "buying tea",
      tickFunction : function (ref, delta, id) {
        ref.tea.increment(id.factors.tea * delta / 1000);
      }
    }
  ],
  actions : [
    {
      tag : 'drink',
      description : "drinking tea",
      duration : 60000,
      activate : function (ref, person) {
        ref.tea.increment(-1);
        ref.cups.increment(1);
        person.factors.exc *= 2;
      },
      deactivate : function (ref, person) {
        person.factors.exc /= 2;
      },
      available : function (ref, person) {
        return ref.tea.amount >= 1 && person.statuses.length === 0;
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

