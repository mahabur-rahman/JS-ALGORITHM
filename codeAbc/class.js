class DataStructure {
  constructor(name) {
    //  this.name = name;
    this.storage = [];
  }

  insert(value) {
    this.storage.push(value);

    return this.storage;
  }

  firtInput(value) {
    this.storage.unshift(value);

    return this.storage;
  }
}

let ds = new DataStructure();

console.log(ds.insert("23"));
console.log(ds.insert("sujon"));

console.log(ds.firtInput("first"));
