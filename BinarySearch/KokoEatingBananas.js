/*
	875. Koko Eating Bananas
*/
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const n = piles.length;

    let st = 1, et = Math.max(...piles);
    let result = et;

    while(st <= et) {
    	const mid = Math.floor(st + (et-st)/2);

    	let totalTimeTaken = 0;
    	for(let i=0; i<n; i++) {
    		totalTimeTaken += Math.ceil(1.0 * piles[i]/mid);
    	}

    	if(totalTimeTaken <= h) {
    		result = Math.min(result, mid);
    		et = mid-1;
    	}	
    	else st = mid+1; 
    }

    return result;
};

// driver function
function main() {
	const piles = [3,6,7,11], h = 8;
	// const piles = [30,11,23,4,20], h = 5;
	// const piles = [30,11,23,4,20], h = 6;
	// const piles = [312884470], h=312884469;

	console.log(minEatingSpeed(piles, h));
}
main();