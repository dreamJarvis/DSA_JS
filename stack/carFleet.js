/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
	const tempArr = [...position];
	const mapArr = new Map();

 	tempArr.sort((a, b) => a-b);

	for(let i=0; i<position.length; i++) {
		const timeTaken = (target - position[i])/speed[i];
		mapArr.set(position[i], timeTaken);
  	}   

  	let st = [];
  	for(const item of tempArr) {
  		st.push(mapArr.get(item));
  	}

  	let fleetCnt = 0;
  	while(st && st.length > 0) {
  		const lstEle = st.pop();
  		while(st && st[st.length-1] <= lstEle)	{
  			st.pop();
  		}

  		fleetCnt++;
  	}

  	return fleetCnt;
};

// Driver function
function main() {
	// const target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3];
	// const target = 10, position = [3], speed = [3];
	const target = 100, position = [0,2,4], speed = [4,2,1];

	console.log(carFleet(target, position, speed));
}
main();