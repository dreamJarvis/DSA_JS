/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    let st = [];
    let result = new Array(n).fill(0);

    for(let i=0; i<n; i++) {
      while(temperatures[i] > temperatures[st[st.length-1]]) {
        const idx = st.pop();
        result[idx] = i - idx;
      }
      st.push(i);
    }

    return result;
};

// driver function
function main() {

};
main();