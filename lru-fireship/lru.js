class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  getItem(key) {
    // get the value of the key
    const item = this.cache.get(key);

    if (item) {
      // delete it and create it again
      // map will track the insertion order
      // & this will update the items insertion order
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }

  putItem(key, val) {
    // delete to update
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    // evict the least recently used key
    else if (this.cache.size === this.capacity) {
      this.cache.delete(this.oldestItem);
    }
    // create item
    this.cache.set(key, val);
  }

  get oldestItem() {
    // get is not nessecary
    // but lets you call it as a property  rather than a function
    // e.g. this.oldestItem vs. this.oldestItem()
    return this.cache.keys().next().value;
    // keys() returns a new map iterator object that contains the keys for each element in the Map object in insertion order.
    // next calls the first one which will be the oldest item
  }
}

const cache = new LRU(5);
cache.putItem('a', 1);
cache.getItem('a');
