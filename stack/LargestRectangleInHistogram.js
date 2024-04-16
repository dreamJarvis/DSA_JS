/*
	84. Largest Rectangle in Histogram
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const n = heights.length;
    
    const prevSmaller = new Array(n).fill(-1);
    const nextSmaller = new Array(n).fill(n);

    let st = [];
    for(let i=0; i<n; i++) {
    	while((st && st.length>0) && heights[i] < heights[st[st.length-1]]) {
    		nextSmaller[st[st.length-1]] = i;
    		st.pop();
    	}
    	st.push(i);
    }

    let pt = [];
    for(let i=n-1; i>=0; i--) {
    	while((pt && pt.length>0) && heights[i] < heights[pt[pt.length-1]]) {
    		prevSmaller[pt[pt.length-1]] = i;
    		pt.pop();
    	}
    	pt.push(i);
    }

    let area = 0, maxArea = 0;
    for(let i=0; i<n; i++) {
    	area = (nextSmaller[i] - prevSmaller[i]-1)*heights[i];
    	maxArea = Math.max(maxArea,area)
    }

    return maxArea;
};

// driver function
function main(){
	// const heights = [2,1,5,6,2,3];
	const heights = [4, 2, 8, 7];
	console.log(largestRectangleArea(heights));
}
main();