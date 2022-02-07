class MyArray{
    constructor(){
        this.size = 0;
        this.arr = [];
    }

    isEmpty(){
        return this.size === 0;
    }

    // 向所有元素后添加一个新元素
    push(val){
        this.add(this.size, vak)
    }
    // 在所有元素添加一个新元素
    unshift(val){
        this.add(0,val)
    }
    // 在第index个位置插入一个新元素val
     add(index,val){
         if(index<0 || index > this.size){
             throw new Error('error')
         }
         for(let i = this.size -1;i>=index;i--){
             this.arr[i+1] = this.arr[i]
         }
         this.arr[index] = val;
         this.size++;
     }
     // 获取index索引位置的元素
     get(index){
         if(index < 0 || index >= this.size){
             throw new Error('error')
         }
         return this.arr[index];
     }
     // 修改index位置的值
     set(index,val){
        if(index < 0 || index >= this.size){
            throw new Error('error')
        }
         this.arr[index] = val
     }
     // 数组中是否包含某个值
     contains(val){
         for(let i =0;i<this.size;i++){
             if(this.arr[i] === val){
                 return true
             }
         }
         return false;
     }

     // 找到某个值的索引
     find(val){
        for(let i =0;i<this.size;i++){
            if(this.arr[i] === val){
                return i
            }
        }
        return -1;
     }

     // 删除指定位置的元素, 返回删除的元素
     remove(index){
        if(index < 0 || index >= this.size){
            throw new Error('error')
        }
        let res = this.arr[index];

        for(let i = index + 1;i<this.size;i++){
            this.arr[i - 1]= this.arr[i]
        }

        this.size--;

        return res;
     }

     // 删除具体某个元素
     removeElement(val){
         let index = find(val);
         if(index !== -1){
             this.remove(index)
         }
     }
}
