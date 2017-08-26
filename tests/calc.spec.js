/* eslint-disable */
import {expect} from 'chai';
import calc from '../src/main';

describe('Calc', () => {

  // smoke tests
  describe('smoke tests', () => {
    it('should exist the calc module', () => {
      expect(calc).to.exist;
    });

    it('should exists the method "sum"', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exists the method "sub"', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exists the method `div`', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });

    it('should exists the method `mult`', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2, 2)`', () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });

    it('should return 7 when `sum(2, 2, 3)`', () => {
      expect(calc.sum(2, 2, 3)).to.be.equal(7);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6, 2)`', () => {
      expect(calc.sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6, 10)`', () => {
      expect(calc.sub(6, 10)).to.be.equal(-4);
    });

    it('should return -9 when `sub(6, 10, 5)`', () => {
      expect(calc.sub(6, 10, 5)).to.be.equal(-9);
    });
  });

  describe('Mult', () => {
    it('should return 4 when `mult(2, 2)`', () => {
      expect(calc.mult(2, 2)).to.be.equal(4);
    });

    it('should return 12 when `mult(2, 2, 3)`', () => {
      expect(calc.mult(2, 2, 3)).to.be.equal(12);
    });
  });

  describe('Div', () => {
    it('should return 2 when `div(4,2)`', () => {
      expect(calc.div(4, 2)).to.be.equal(2);
    });

    it('should return `cannot divide by zero` when divide by 0', () => {
      expect(calc.div(4, 0)).to.be.equal('cannot divide by zero');
    });
  });

});
