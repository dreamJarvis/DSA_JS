/*
	selection sort
*/
function swap(arr, v1, v2) {
	const temp = arr[v1];
	arr[v1] = arr[v2];
	arr[v2] = temp;
}

const selectionSort = (arr) => {
	const n = arr.length;
	for(let i=0; i<n; i++) {
		let min_idx=i;
		for(let j=i+1; j<n; j++) {
			if(arr[j] < arr[min_idx])
				min_idx = j;
		}

		swap(arr, i, min_idx);
	}
}

const arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log(arr);