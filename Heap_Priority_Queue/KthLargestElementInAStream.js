/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
	k = k;
	nums = nums;
	sortedNums = new Set(nums);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    this.sortedNums.add(val);
    return this.sortedNums[this.sortedNums.length - this.k];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

function main() {
	KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
	kthLargest.add(3);   // return 4
	kthLargest.add(5);   // return 5
	kthLargest.add(10);  // return 5
	kthLargest.add(9);   // return 8
	kthLargest.add(4);   // return 8
};
main();

/*
1) AZGB, 13
2) VGXGPUAMKX, 81
3) KSZHKBPPHYKINKEZPLVFJAQMOPODOTKRJZRIMLVUMUARENEXCF, 343
4) VJAOALCGXOVLDQFZAORAHDIGYOJKNVIAZTPCMXLVOVAFHJPHVSHYFIQQTQBXJJMQNGQJHWKCEXECMDKMZAKBZRKJWQDYUXDVOOSSJOATRYXMBWXBWEXNAGMAYGZYFNZPQFTOBTAOTUAYXMWVZLLKUJIDHUKZWZCLTGQNGGUFTUAHALWVJWQNCKSIZGZAJKHYJUJLKSESZAFZJMDTSBYLDHYLCGKYNGVMHNEQYJDUGOFKLITXAOYKFOQKZSZNJYARKUPRERIVHUBPEHXMOYDAKKLBDNFHFXAMOTUBELZVBOZJARAEFMLOTFTNQRJOLVUAMAHNDEKFDSQCFVMQBOCBOMJXRQSFSKEVFXPHCQOQKBBOMCYURWLRNHRHCTNTZLYLVWULBDKCDPPGYKICHJTPUKFNLXFCEVKJEZQSMEYCANJLBESSRFAZDPRCOMDPJIMSFBUSLKSYVEERGCGMONCTCSVYPOLPLCGSQYFKILRIXODIWQCYREIWKRPIUIASFKJEXPFTZNQIBLSRJUYFSKNDAPWJEFUCDQCIUEHVFNDGHRXXNMVZLJXIOYUNDVPNDABSBNWOEYOMRJDCQCRXVYAHERMUDCCMUEAHEBYVSAKXWSEQZDUYFEZUJAFFDRSQFSEQSDFCGDENMRFWFNDIJTEPXHNVEDFBAGZRXKPRTGBOUKFXIWHFZFKSNAWGCUBSPXSIUYTQRWMVXFSVZLOTLFWIMLIYGNFDDESWMXUVHNQVJZGKPDZFJMCJCMSAASKEXTLSJRGGTYCGCQFPOQOMROUHJKNTQRYHJIFCXBYWHFUTFZMJCDLIVNUXMRDFGHKQLQZAEEAZKOOMVPYSJWNCYQYABUTSITEZURQHBUWABEXRCUIWAFNFVCASMRMBQNUPRUSKHSMEICAQQESYYVOPEPMVDOSIBRVQOGHDEIKBPQBFGRUFXDSQCHJKUXPXNGEBXRMQDGQJSOSENCRBWKNLLVUCVUBYOZFMTTXTLSRRNRQA, 6622

5) ZNMD, 23
*/