// Given an integer array nums of length n and an integer target,

// find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

const threeClosest = (nums, target) => {
  nums.sort((a, b) => a - b); // 1. sort array from lest - greatest
  let closestSum = nums[0] + nums[1] + nums[2]; // 2. Init closest sum from 3 elements of the array

  for (i = 0; i < nums.length - 2; i++) {
    // 3. Use for loop to iterate thru the array
    let left = i + 1; // 4. Use pointer method to find two elements to sum up to target
    let right = nums.length - 1; // 4. Use pointer method to find two elements to sum up to target

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      console.log(sum);
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        // 5. Update the closestSum based on results
        console.log(
          Math.abs(sum - target),
          `---`,
          Math.abs(closestSum - target)
        );
        closestSum = sum;
      }

      if (sum < target) {
        // 6. Continues to move pointer right and left
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
};

console.log(threeClosest([-1, 2, 1, -4], 1));
console.log(threeClosest([0, 0, 0], 1));
