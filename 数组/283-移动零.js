// 原理
// 1.定义变量k，k的初始值为0，表示[0,k)区间保存所有遍历过的非0元素
// 2.遍历数组，当遍历的元素是非0元素，就和k指向的0元素交换位置
// 3.有个优化点，就是当k等于i的时候，不需要交换位置
// 4.最后返回数组

function moveZero(arr){
    let k = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] !==0){
            if(k !==i){
                [arr[k], arr[i]] = [arr[i], arr[k]]
                k++
            }else{
                k++
            }
        }
    }
    return arr;
}
const arr = [0,1,2,0,3];
console.log(moveZero(arr))