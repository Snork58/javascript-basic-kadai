const square = (num) => {
  let i = 1;
  let tempNum = num;
  do {
    tempNum = tempNum * num;
    i++
  } while (i < 2)
  return tempNum;
}

console.log(square(10));