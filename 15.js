


function threeSum(nums) {
    let ans = [];
    const len = nums.length;
    if(nums === null || len < 3) return ans;

    nums.sort((a,b) => a-b)
    for(let i =0;i<len;i++){
        if(nums[i] === nums[i-1]) continue;

        let l = i + 1;
        let r = len - 1;

        while ( l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if(sum === 0){
                ans.push([nums[i], nums[l], nums[r]])
                while(l<r && nums[l] === nums[l+1]){
                    l++
                }
                while(l<r && nums[r] === nums[r-1]){
                    r--
                }
                l++
                r--
            }else if(sum < 0 ){
                l++
            }else if(sum > 0){
                r--
            }
        }
    }
    return ans;
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  var threeSum = function(nums) {
//     let ans = [];
//     const len = nums.length;
//     if(nums == null || len < 3) return ans;
//     nums.sort((a, b) => a - b); // 排序
//     for (let i = 0; i < len ; i++) {
//         if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
//         if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
//         let L = i+1;
//         let R = len-1;
//         while(L < R){
//             const sum = nums[i] + nums[L] + nums[R];
//             if(sum == 0){
//                 ans.push([nums[i],nums[L],nums[R]]);
//                 while (L<R && nums[L] == nums[L+1]) L++; // 去重
//                 while (L<R && nums[R] == nums[R-1]) R--; // 去重
//                 L++;
//                 R--;
//             }
//             else if (sum < 0) L++;
//             else if (sum > 0) R--;
//         }
//     }        
//     return ans;
// };

const nums = [-1,0,1,2,-1,-4]; // [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums))