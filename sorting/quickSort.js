/*
	Quick Sort
	tc: O(n^2)
	avg tc: O(n*log(n))
*/
function quickSort(arr) {
	const n = arr.length;
	if(!n)	return arr;

	const pivot = arr[n-1];
	const leftArr = [];
	const rightArr = [];

	for(let i=0; i<n; i++) {
		if(arr[i] < pivot)	leftArr.push(arr[i]);
		if(arr[i] > pivot) rightArr.push(arr[i]);
	}

	return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [-6, 20, 8, -2, 4];
console.log(quickSort(arr));