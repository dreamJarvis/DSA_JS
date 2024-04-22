/*
	355. Design Twitter
	https://leetcode.com/problems/design-twitter/description/	
*/
var Twitter = function() {
    this.posts = [];
    this.follwers = {};
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.posts.push({
        userId,
        tweetId
    })
    if(!this.follwers[userId])
        this.follwers[userId] = new Set();
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const prevPosts = [...this.posts];
    const result = [];

    if(!this.follwers[userId])   return []; // user doesn't follows anyone
    while(result.length < 10 && this.posts.length) {
        const post = this.posts.pop();
        if(post.userId !== userId && !this.follwers[userId].has(post.userId))
            continue;
        result.push(post.tweetId);
    }

    this.posts = prevPosts;
    return result.length ? result : [];
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(!this.follwers[followerId])
        this.follwers[followerId] = new Set();
    this.follwers[followerId].add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    this.follwers[followerId].delete(followeeId);
};

const twitter = new Twitter();
twitter.postTweet(1, 1);
console.log(twitter.getNewsFeed(1));
twitter.follow(2, 1);
console.log(twitter.getNewsFeed(2));
twitter.unfollow(2, 1);
console.log(twitter.getNewsFeed(2));