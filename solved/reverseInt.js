// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
// then return 0.

const reverse = (x) => {
  let reverseInteger = parseInt(
    Math.abs(x).toString().split('').reverse().join('')
  );

  // if rInt exceeds 32-bit meaning it overflows
  if (reverseInteger > 2147483647) {
    return 0;
  }

  return x < 0 ? -Math.abs(reverseInteger) : reverseInteger;
};

console.log(reverse(-123));
console.log(reverse(120));
//console.log(reverse(123));
