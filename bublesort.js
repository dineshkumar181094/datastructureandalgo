a = [10,2,3,5,6,17]

for ( let i = a.length-1 ; i >=0 ; i--) {
  for (let j = 0; j<=i-1;j++) {
    if(a[j] > a[j+1]) {
      //swap
      temp = a[j]
      a[j] = a[j+1]
      a[j+1] = temp
    }
  }
}
console.log(a)
