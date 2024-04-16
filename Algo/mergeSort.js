/*
	MERGE SORT
*/
function swap(arr, left, right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

function merge(leftArr, rightArr) {
	const temp = [];
	const n = leftArr.length;
	const m = rightArr.length;
	let i=0, j=0;

	while(i<n && j<m) {
		if(leftArr[i] <= rightArr[j]) {
			temp.push(leftArr[i]);
			i++;
		} else {
			temp.push(rightArr[j]);
			j++;
		}
	}

	return [temp, ...leftArr, ...rightArr];
}

function mergesort(arr) {
	if(arr.length < 2) return arr;

	const mid = Math.floor(arr.length/2);
	const leftArr = arr.slice(0, mid);
	const rightArr = arr.slice(mid);
	return merge(arr, mergesort(leftArr), mergesort(rightArr));
}

const arr = [8, 20, -2, 4, -6];
// const arr = [-6, -2, 4, 8, 20]
mergesort(arr);
console.log(arr);