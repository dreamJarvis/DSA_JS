/*
	121. Best Time to Buy and Sell Stock
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minEle = prices[0];
    let maxProfit=0;
    for(let i=1; i<prices.length; i++) {
        minEle = Math.min(minEle, prices[i]);
		maxProfit = Math.max(maxProfit, (prices[i] - minEle));
    }

    return maxProfit;
};

/* Driver function */
function main() {
	const prices = [7,1,5,3,6,4];
	// const prices = [7,6,4,3,1];

	console.log(maxProfit(prices));
};
main();