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



const nums = [-1,0,1,2,-1,-4]; // [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums))