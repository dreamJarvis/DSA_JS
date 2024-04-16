/*
	insertion sort
*/
function swap(arr, v1, v2) {
	const temp = arr[v1];
	arr[v1] = arr[v2];
	arr[v2] = temp;
}

function insertionSort(arr) {
	const n = arr.length;
	for(let i=1; i<n; i++) {
		const curr = arr[i];
		j = i-1;
		while(j >= 0 && arr[j] > curr) {
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = curr;
	}
}

const arr = [12, 11, 13, 5, 6];
insertionSort(arr);
console.log(arr); 