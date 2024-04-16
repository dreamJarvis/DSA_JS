/*
	981. Time Based Key-Value Store
*/


var TimeMap = function() {
    /* 
    {
        1 : [[5, 123], [2, 567]],
        2 : [[3, 235]]
    }
    */
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (this.map[key]) this.map[key].push([value, timestamp]);
    else this.map[key] = [[value, timestamp]];
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    // [[bar, 1], [bar2, 4]]
    // timestamp = 3

    // get key
    // then iterate through keeping track of largest timestamp found
    if (this.map[key]) {
        const values = this.map[key];
        let largestTimestamp = 0;
        let valueToReturn = "";

        // do binary search
        let left = 0;
        let right = values.length - 1;
        while (left <= right) {
            const mid = Math.floor((right + left) / 2);
            // found element
            if (timestamp === values[mid][1]) {
                return values[mid][0];
            }
            // search left
            else if (timestamp < values[mid][1]) {
                right = mid - 1;
            } 
            // search right
            else {
                // keep track of largest timestamp found
                if (values[mid][1] > largestTimestamp) {
                    largestTimestamp = values[mid][1];
                    valueToReturn = values[mid][0];
                }
                left = mid + 1;
            }
        }

        return valueToReturn;
    }

    return "";
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

// driver function
function main() {

};
main();