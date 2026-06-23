// DSA Pratice and solutions 

// 1. 2 pointers 

const arr = [2,4,6,7,9]
const target = 9

function twoPointers(arr, target){
    let map = new Map()
    for(let i=0; i<arr.length; i++){
        const completed = target - arr[i]
        if(map.has(completed)){
            return [map.get(completed), i]
        }
        map.set(arr[i], i)
    }

}
console.log(twoPointers(arr, target))

//----------------------------------------------------------------------------------------------------