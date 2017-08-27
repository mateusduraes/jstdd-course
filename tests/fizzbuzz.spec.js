/*

  Desafio FizzBuzz

  Escreva uma lib que um número e:

  Se o número for divisível por 3, no lugar do número escreva 'Fizz'
  Se o número for divisível por 5, no lugar do número escreva 'Buzz'
  Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'
  Se não for múltiplo de nada, retorna o número

*/
import { expect } from 'chai';
import FizzBuzz from '../src/fizzbuzz';

describe('FizzBuzz', () => {

  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return the number when is not multiple of 3 or 5', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });

});