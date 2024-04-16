let containsDuplicate = (nums) => {
	const unqArr = new Set(nums);					// stores only unique value
	if(unqArr.size === nums.length)	return false
	return true;
}

// Driver function
function main(){
	let nums = [1,2,3,1];
	// let nums = [1,2,3];
	console.log(containsDuplicate(nums));
}

main();