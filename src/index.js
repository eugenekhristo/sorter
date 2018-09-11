class Sorter {
  constructor() {
    this.store = [];
    this.comparator = null;
  }

  add(element) {
    this.store.push(element);
  }

  at(index) {
    return this.store[index];
  }

  get length() {
    return this.store.length;
  }

  toArray() {
    return this.store;
  }

  sort(indices) {
    const newArr = indices.map(i => this.store[i]);
    indices.sort((a, b) => a - b);

    if (!this.comparator) {
      newArr.sort((a, b) => a - b);
    } else {
      newArr.sort(this.comparator);
    }

    newArr.forEach((value, i) => {
      this.store[indices[i]] = value;
    });
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
