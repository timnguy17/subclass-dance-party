// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
//4. we get 'this' from blinky dancer and adding properties to the current instance/obj
  // var dancer = {};
  //5. 'this' = {timeBetweensteps = timeBetweenSteps}
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  //6. we are creating a jquery obj & assigning it to $node.
  this.$node = $('<span class="dancer"></span>');

  //7. invoking step method
  this.step();

  //9. invoke set position
  this.setPosition(top, left);

};

//.8 invoke step method and pass step method into set timeout
makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step it just schedules the next step

  // when you pass a method(this.step) as an object to another function as a callback(setTimeout takes a function as an arg)  the 'this' is lost. so we use .bind (this) to set it to a specific value.


  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


//10. invoke set postion with args of top/left
makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  //11.pass in top/left into stylesettings var which as assigned as values
  var styleSettings = {
    top: top,
    left: left
  };
  //12. add css to node, which is added to 'this' obj
  this.$node.css(styleSettings);
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body

//moved to 10
// makeDancer.prototype.setPosition(top, left);

// return dancer;