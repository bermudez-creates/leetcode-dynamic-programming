// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

const twoSort = (nums1, nums2) => {
  // merge both arrays & sort them
  const children = nums1.concat(nums2).sort();
  // math.floor rounds down to closest whole integer
  // dividing new array by 2 to check if its odd
  const mid = Math.floor(children.length / 2);
  console.log(mid);

  // return number at midpoint if the array is odd => Absolutely being divided by 2 does not equal 0
  return mid % 2 !== 0
    ? children[mid]
    : // else divide divide the two middle numbers
      (children[mid - 1] + children[mid]) / 2;
};

console.log(twoSort([1, 3], [2]));
console.log(twoSort([1, 2], [3, 4]));

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
