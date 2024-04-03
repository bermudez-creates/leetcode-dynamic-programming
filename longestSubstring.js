// Given a string `s`, find the length of the longest substring
// without repeating characters.

const lengthOfSubstring = (s) => {
  // initial value for longest substring
  let max = 0;
  let arr = [];
  // loop through `s` string
  for (let i = 0; i <= s.length; i++) {
    // Set object lets you store unique values of any type
    // let current = new Set();

    // loop through letters at current index
    for (let j = i; j <= s.length; j++) {
      let current = s[j];
      let next = s[j + 1];

      console.log(current, next, nextNext);

      if (current === s[j]) {
        arr.push(s[j]);
        return arr;
      }
      // if (!current.has(s[j])) {
      //   current.add(s[j]);
      // } else {
      // console.log(current);

      //   max = Math.max(max, current.size);
      //   console.log(max);
      //   return current;
      // }
    }

    // max = Math.max(max, current.size);
  }
  console.log(`Array:`, arr);
  return max;
};

// console.log(lengthOfSubstring('abcabcbb')); // 3 => The answer is "abc", with the length of 3.
// console.log(lengthOfSubstring('bbbbb')); // 1 => The answer is "b", with the length of 1.
console.log(lengthOfSubstring('pwwkew')); // 3 => The answer is "wke", with the length of 3
