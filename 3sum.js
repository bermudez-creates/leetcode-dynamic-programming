// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]

// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

const threeSum = (nums) => {
  // if (nums !== 0) return [];
  const target = 0;
  let arr = [];
  nums.sort((least, greatest) => least - greatest);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i + 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    // console.log(left, right);
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        arr.push(nums[i], nums[left], nums[right]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return arr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // => [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // => []
console.log(threeSum([0, 0, 0])); // => [[0,0,0]]

// Example 1:

// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:

// Explanation: The only possible triplet does not sum up to 0.

// Example 3:

// Explanation: The only possible triplet sums up to 0.
