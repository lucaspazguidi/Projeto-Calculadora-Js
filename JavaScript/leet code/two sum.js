let nums = [7,2,11,15]
let target = 26
nums.sort((a,b) => a - b)

let Newmap = new Map();

for (i = 0; i< nums.length; i++) {
    complemento = target - nums[i]
    if(Newmap.has(complemento)){
        console.log(`[${Newmap.get(complemento)},${i}]`);
        break;
    }
    Newmap.set(nums[i], i)
}  
