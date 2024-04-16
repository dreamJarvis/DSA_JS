/**
 * @param {number} capacity
 */
class Node {
    constructor(key, val) {
        this.key = key; //need a key property because we're given a key-value pair to store.
        this.val = val;

        this.next = this.prev = null;
    }
}

var LRUCache = function (capacity) {
    this.cap = capacity;
    this.map = new Map();

    this.head = new Node(0, 0); //dummy. mry
    this.tail = new Node(0, 0); //dummy. lru

    //make left and right connect.
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.remove = function (node) {
    const { prev, next } = node;
    prev.next = next;
    next.prev = prev;
}

LRUCache.prototype.insert = function (node) {
    const next = this.head.next;

    this.head.next = node;
    node.prev = this.head;
    
    node.next = next;
    next.prev = node;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        const node = this.map.get(key);
        this.remove(node);
        this.insert(node); // move to head
        return node.val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        const node = this.map.get(key);
        this.remove(node);
    }

    const newNode = new Node(key, value);

    this.insert(newNode);
    this.map.set(key, newNode);

    if (this.map.size > this.cap) {
        const lru = this.tail.prev;
        this.remove(lru);
        this.map.delete(lru.key);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */