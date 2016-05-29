const
  {deepEqual,equal} = require("chai").assert,
  {Maybe} = require('../support');

module.exports = E =>
  describe("Applicative Exercises", function(){
    it('Exercise 1', function(){
      deepEqual(Maybe.of(5), E.ex1(2, 3));
      deepEqual(Maybe.of(null), E.ex1(null, 3));
    });

    it('Exercise 2', function(){
      deepEqual(Maybe.of(5), E.ex2(Maybe.of(2), Maybe.of(3)));
      deepEqual(Maybe.of(null), E.ex2(Maybe.of(null), Maybe.of(3)));
    });

    it('Exercise 3', function(done){
      E.ex3.fork(console.log, function(html) {
        equal("<div>Love them tasks</div><li>This book should be illegal</li><li>Monads are like space burritos</li>", html);
        done();
      });
    });

    it('Exercise 4', function(){
      equal("toby vs sally", E.ex4.unsafePerformIO());
    });
  });