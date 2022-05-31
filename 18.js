/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    let len = nums.length;
    if(len < 4) return [];

    nums.sort((a, b) => a - b); // 排序
    
    let result = [];
    for(let i = 0; i < len - 3; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) // 去重
            continue;

        for(let j = i + 1; j < len - 2; j++) {
            if(j > i + 1 && nums[j] === nums[j - 1]) // 去重
                continue;

            let left = j + 1; // 左指针初始化
            let right = len - 1; // 右指针初始化

            while(left < right) {
                if(nums[i] + nums[j] + nums[left] + nums[right] > target) {
                    right--; // 如果大于0，右指针左移，让和小一点
                } else if(nums[i] + nums[j] + nums[left] + nums[right] < target) {
                    left++; // 如果小于0，左指针右移，让和大一点
                } else {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while(left < right && nums[right] === nums[right - 1]) {
                        right--; // 去重
                    }
                    while(left < right && nums[left] === nums[left + 1]) {
                        left++; // 去重
                    }
                    // 找到一个符合条件的四元组了，两指针同时收缩
                    right--;
                    left++;
                }
            }
        }
        
    }
    return result;
};


const nums = [1,0,-1,0,-2,2], target = 0;
console.log(fourSum(nums,target))