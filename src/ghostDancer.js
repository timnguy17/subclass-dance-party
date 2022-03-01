var makeGhostDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);


};



makeGhostDancer.prototype = Object.create(makeDancer.prototype);

makeGhostDancer.prototype.constructor = makeGhostDancer;


//methods

makeGhostDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.fadeToggle('slow');
};




