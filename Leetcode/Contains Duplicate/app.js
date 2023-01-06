// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

cosnt containsDuplicate = function (nums) {
  for(let right = 0; right < nums.length; right++)
  {
    for (let left = 0; left < right; left++){
      const isDuplicate = nums[left] === nums[right];
      if(isDuplicate) return true;
      
    }
  }
  return false

}

console.log([1, 2, 3, 1])
// true


/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(N))
 * Time O(N * log(N)) | Space O(1)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
    nums.sort((a, b) => a - b);/* Time O(N * log(N)) | Space O(1 || log(N)) */

    return hasDuplicate(nums);
}

const hasDuplicate = (nums) => {
    for (let curr = 0; curr < (nums.length - 1); curr++) {/* Time O(N) */
        const next = (curr + 1);

        const isNextDuplicate = nums[curr] === nums[next];
        if (isNextDuplicate) return true;
    }

    return false;
}


