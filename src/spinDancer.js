var makeSpinDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  // this.$node = $('<span class="rotated"></span>');
  this.$node = $('<img src="http://compsci.ca/v3/uploads/attachments/ddrarrow_116.gif" class="newRotate resize">');

  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
};



makeSpinDancer.prototype = Object.create(makeDancer.prototype);

makeSpinDancer.prototype.constructor = makeSpinDancer;


//methods

makeSpinDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.animate();
};




