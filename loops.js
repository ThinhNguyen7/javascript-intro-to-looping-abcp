function forLoop(Array){
  for (let i = 0; i < 25; i++) {
    if(i===1){
      Array.push('I am 1 strange loop.')
    }
    else {Array.push(`I am ${i} strange loops.`)}
  } return Array
}

function whileLoop(n){
  while (n > 0) {
    console.log(n--)
  }
  console.log("done")
}