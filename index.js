// 二分查找法


// 题目：
// 给定一个数组，判断一个值是否在数组中，如果在，
// 就返回这个值的索引，否则返回-1


// 原理：
// 1.定义变量left表示数组左边界，变量right表示数组
// 右边界
// 2.通过while循环，当left 小于等于 right的时候，
// 一直遍历
// 3.定义变量mid表示数组的中间值的索引
// 4.首先判断目标值target和数组的中间值是否相等，
// 如果相等，则表示找到了，返回中间值的索引mid
// 5.判断如果目标值大于中间值，说明目标值在
// [mid, right]区间，此时将left值变成mid+1，
// 将区间变成[mid, rihgt]
// 6.判断如果目标值小于中间值，说明目标值在
// [left, mid]区间，此时将right值变成mid-1, 
// 将区间变成[left, mid]
// 7.循环遍历，还是没有找到就返回-1

function search(arr, target){
    let left = 0, right = arr.length-1;
    while(left <= right){
        let mid = parseInt((left + right)/2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            left = mid + 1;
        }else{
            right = mid -1;
        }
    }
    return -1;
}
let arr = [1,2,3,4]
console.log(search(arr, 5))
