/*
	Median of Two Sorted Arrays
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(arr1, arr2) {
	const n = arr1.length;
	const m = arr2.length;

	if(n > m)
	  return findMedianSortedArrays(arr2, arr1);

	let low = 0, high = n;
	while(low <= high) {
		const partitionX = Math.floor((high + low)/2);
		const partitionY = Math.floor((n+m+1)/2) - partitionX;

		const maxLeftX = partitionX == 0 ? Number.MIN_SAFE_INTEGER : arr1[partitionX-1];
		const minRightX = partitionX == n ? Number.MAX_SAFE_INTEGER : arr1[partitionX];

		const maxLeftY = partitionY == 0 ? Number.MIN_SAFE_INTEGER : arr2[partitionY-1];
		const minRightY = partitionY == m ? Number.MAX_SAFE_INTEGER : arr2[partitionY];

		if(maxLeftX <= minRightY && maxLeftY <= minRightX) {
		  if((n+m)%2) {
		    return Math.max(maxLeftX, maxLeftY);
		  } else {
		    return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY))/2;
		  }
		}

		if(maxLeftY > minRightX) {
		  low = partitionX+1;
		} else{
		  high = partitionX-1;
		}
	}

	return -1;
};

// driver function
function main() {
	const nums1 = [1,3], nums2 = [2];
	// const nums1 = [1,2], nums2 = [3,4];

	console.log(findMedianSortedArrays(nums1, nums2));
};
main();