
let nums = 0
for (let i = 0; i < 1e4; i++) {
    console.log(i)
    nums += i
}

process.send(nums) 


