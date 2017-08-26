const should = require ('chai').should();

const fizzBuzzer = require('../fizzBuzzer');
// normal cases: multiples of 15, 5, and 3
describe('fizzBuzzer', function() {
    
      it('should return "fizz-buzz" for multiples of 15', function() {
        [15,30,45,60].forEach(function(input) {
          fizzBuzzer(input).should.equal('fizz-buzz');
        });
      });
    
      it('should return "fizz" for multiples of 3', function() {
        [3, 6, 9, 12].forEach(function(input) {
          fizzBuzzer(input).should.equal('fizz');
        });
      });
    
      it('should return "buzz" for multiples of 5', function() {
        [5, 10, 20, 25].forEach(function(input) {
          fizzBuzzer(input).should.equal('buzz');
        });
      });
    });