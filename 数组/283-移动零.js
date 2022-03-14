


function moveZero(arr){
    let k = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i] !==0){
            if(k !== i){
                [arr[k], arr[i]] = [arr[i], arr[k]]
                k++
            }else{
                k++
            }
        }
    }
    return arr;
}

let arr = [1,0,2,0,0,3]
console.log(moveZero(arr))