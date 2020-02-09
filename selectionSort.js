array = [1,99,33,44,29,0]

function selectionSort(array) {
  for (let i = 0; i < array.length ; i++) {
    smallestvalue = array[i]
    smallestindex = i
    for(let j=i;j < array.length;j++) {
      if (array[j] < smallestvalue) {
        smallestvalue = array[j]
        smallestindex = j
      }


    }
    //swaping
    temp = array[i]
    console.log("swaping")
    array[i] = smallestvalue
    array[smallestindex] = temp
    console.log(`iteration${i}`,array)
    
  }
  console.log(array)
}
selectionSort(array)
console.log(array)
