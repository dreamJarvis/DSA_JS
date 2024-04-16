/*
	Bubble Sort
*/
function swap(arr, v1, v2) {
	const temp = arr[v1];
	arr[v1] = arr[v2];
	arr[v2] = temp;
}

const bubbleSort = (arr) => {
	const n = arr.length;
	for(let i=0; i<n; i++) {
		let swapped = false;
		for(let j=0; j<n-i-1; j++){
			if(arr[j] > arr[j+1]) {
				swap(arr, j, j+1)
				swapped = true;
			}
		}

		if(!swapped)	break;
	}
}

const array = [-6, 20, 8, -2, 4];
// const array = [-12, 2, 12, 31, -3, 23];
bubbleSort(array);
console.log(array);