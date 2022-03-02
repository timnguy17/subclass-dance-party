// 1. ryan is invoking the makeBlinkydancer function with arg (10, 10, 10)

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  //2. because we used new keyword, we are creating a 'this' = {}
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  //3. calling makeDancer factor and passing current instance 'this' with rest of args
  makeDancer.call(this, top, left, timeBetweenSteps);

  // this.$node =

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function




};



makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


//methods

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

makeBlinkyDancer.prototype.lineUp = function(top, left) {
  this.setPosition(top, left);

};
//var test = new makeBlinkyDance(10, 10, 10)


