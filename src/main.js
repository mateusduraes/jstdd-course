module.exports = {
  sum(...nums) {
    return nums.reduce((previous, current) => previous + current, 0);
  },

  sub(...nums) {
    return nums.reduce((previous, current) => previous - current);
  },

  div(num1, num2) {
    return num2 === 0 ? 'cannot divide by zero' : num1 / num2;
  },

  mult(...nums) {
    return nums.reduce((previous, current) => previous * current);
  },

};
