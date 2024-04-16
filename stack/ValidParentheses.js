/*
	20. Valid Parentheses
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    let hashMap = new Map ([
        [")", "("],
        ["]", "["],
        ["}", "{"]
    ]);

    for (let i=0; i<s.length; i++){
        let len=stack.length;
        if (hashMap.has(s[i])){
            if (stack[len-1]==hashMap.get(s[i])){
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length==0 ? true : false;
};

// Driver function
function main() {
	// const s = "()";
	// const s = "()[]{}";
	// const s = "(]"
	const s = "["

	console.log(isValid(s));
}
main();