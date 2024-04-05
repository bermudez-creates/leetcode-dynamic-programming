// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1],
// then return 0.

const reverse = (x) => {
  console.log(`START`, Math.abs(x).toString().split('').reverse().join(''));
  let reverseInteger = parseInt(
    Math.abs(x).toString().split('').reverse().join('')
  );

  // if rInt exceeds 32-bit meaning it overflows
  if (reverseInteger > 2147483647) {
    return 0;
  }

  console.log(`END`, -Math.abs(x));
  return x < 0 ? -Math.abs(reverseInteger) : reverseInteger;

  // let pop = x % 10;
  // x /= 10;

  // console.log(`---`, x);
  // if (pop !== 0) {
  //   rev(x);
  // } else {
  //   return x;
  // }
};

console.log(reverse(-123));
console.log(reverse(120));
//console.log(reverse(123));
