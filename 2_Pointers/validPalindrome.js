/*
	125. Valid Palindrome
*/
/**
 * @param {string} s
 * @return {boolean}
 */
//  replace(/[^a-z0-9]/gi, '')
var isPalindrome = function(s) {
    const str1 = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const str2 = str1.split("").reverse().join("");

    return str1 === str2;
};

/*
	Driver function
*/
function main() {
	const s = "A man, a plan, a canal: Panama";
	// const s = "race a car";
	// const s = " ";
	console.log(isPalindrome(s)); 
};
main();