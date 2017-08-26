/* eslint-disable */
var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', function() {

  // smoke tests
  describe('smoke tests', function() {
    it('should exist the calc module', function() {
      expect(calc).to.exist;
    });

    it('should exists the method "sum"', function() {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exists the method "sub"', function() {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exists the method `div`', function() {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });

    it('should exists the method `mult`', function() {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });
  });

  describe('Sum', function() {
    it('should return 4 when `sum(2, 2)`', function() {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });

    it('should return 7 when `sum(2, 2, 3)`', function() {
      expect(calc.sum(2, 2, 3)).to.be.equal(7);
    });
  });

  describe('Sub', function() {
    it('should return 4 when `sub(6, 2)`', function() {
      expect(calc.sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6, 10)`', function() {
      expect(calc.sub(6, 10)).to.be.equal(-4);
    });

    it('should return -9 when `sub(6, 10, 5)`', function() {
      expect(calc.sub(6, 10, 5)).to.be.equal(-9);
    });
  });

  describe('Mult', function() {
    it('should return 4 when `mult(2, 2)`', function() {
      expect(calc.mult(2, 2)).to.be.equal(4);
    });

    it('should return 12 when `mult(2, 2, 3)`', function() {
      expect(calc.mult(2, 2, 3)).to.be.equal(12);
    });
  });

  describe('Div', function() {
    it('should return 2 when `div(4,2)`', function() {
      expect(calc.div(4, 2)).to.be.equal(2);
    });

    it('should return `cannot divide by zero` when divide by 0', function() {
      expect(calc.div(4, 0)).to.be.equal('cannot divide by zero');
    });
  });

});
