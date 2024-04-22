/*
	355. Design Twitter
	https://leetcode.com/problems/design-twitter/description/	
*/
var Twitter = function() {
    this.userToFollowerMap = {};
    this.posts = [];
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
        });
    if (!this.userToFollowerMap[userId]) {
        this.userToFollowerMap[userId] = new Set();
    }
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    const fallbackStack = [...this.posts];
    const feed = [];
    if (!this.userToFollowerMap[userId]) return [];
    while (feed.length < 10 && this.posts.length) {
        const post = this.posts.pop();
        if (post.userId !== userId && !this.userToFollowerMap[userId].has(post.userId)) {
            continue;
        }
        feed.push(post.tweetId);
    }
    this.posts = fallbackStack;
    return feed.length ? feed : [];
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.userToFollowerMap[followerId]) {
        this.userToFollowerMap[followerId] = new Set();
    }
    this.userToFollowerMap[followerId].add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    this.userToFollowerMap[followerId].delete(followeeId);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

const twitter = new Twitter();
twitter.postTweet(1, 1);
console.log(twitter.getNewsFeed(1));
twitter.follow(2, 1);
console.log(twitter.getNewsFeed(2));
twitter.unfollow(2, 1);
console.log(twitter.getNewsFeed(2));
