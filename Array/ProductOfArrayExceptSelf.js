/*
	238. Product of Array Except Self
*/
var productExceptSelf = function(nums) {
    let check = 0;
    const multiple = nums.reduce((accumulator, currentValue) => {
        if (currentValue === 0) {
            check++;
            return accumulator
        } else {
           return accumulator * currentValue
        }
    },
    1);

    console.log(multiple);

    if (check > 1) return nums.map(item => 0);

    return nums.map(item => {
        if (item === 0) return multiple;
        if (check === 1) return 0;
        return multiple / item
    })
};

// Driver function
function main() {
	// const nums = [1,2,3,4]; 
	const nums = [-1,1,0,-3,3]; 

	console.log(productExceptSelf(nums));
};
main();