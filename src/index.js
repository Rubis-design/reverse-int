function reverse(n) {
  const digits = Math.abs(n).toString().split('').reverse().join('');
  return Number(digits);
}

module.exports = reverse;
