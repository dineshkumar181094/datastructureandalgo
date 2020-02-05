class HashTable {
  constructor (size) {
    this.data = new Array(size)
    
  }

   _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)*i)% this.data.length
    }
    return hash
  }

  set(key,value) {
    this.address = this._hash(key)
    console.log(this.address)
    if (!this.data[this.address]) {
      this.data[this.address] = []
    }
    this.data[this.address].push([key,value])
    console.log(this.data)
  }

  get(key) {
    let address = this._hash(key)
    let data = this.data[address]
    for (let i = 0; i< data.length; i++) {
      if (key == data[i][0]) {
        return data[i][1]
      }

    }

    
  }

  keys() {
    let keysArray = []
    for (let i = 0; i<this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0])
      }
    } 
    return keysArray
  }
  values() {
    let valuesArray = []
    for (let i = 0; i<this.data.length; i++) {
      if (this.data[i]) {
        valuesArray.push(this.data[i][0][1])
      }
    } 
    return valuesArray
  }
}

myHash = new HashTable(50)
myHash.set("grapes","1000")
myHash.set("apple","1000")
myHash.get("grapes")
console.log(myHash.keys())
myHash.values()
