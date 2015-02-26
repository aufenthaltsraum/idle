AI.state = new AI.State();

$(document).ready(function () {
  /* How should the people be initially drawn? */
  AI.state.people.draw();

  AI.interval = window.setInterval(AI.tick, 100);
});
