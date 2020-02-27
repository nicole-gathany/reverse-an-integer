var reverse = function(x) {
  let numberArr = x.toString().split("");
  let newArr = [];
  let numString = null;
  let result = 0;


  for (let i = numberArr.length - 1; i >= 0; i--) {
    
    newArr.push(numberArr[i]);
  }
  
   if(numberArr[numberArr.length-1]!==0) {
     if ( x > 0 && x<10001) {
    numString = newArr.join("");
    result = parseFloat(numString, 10);
  } else if (x < 0) {
    newArr.unshift("-");
    newArr.pop();
    numString = newArr.join("");
    result = parseFloat(numString, 10);
  } else if (x === 0 || x>10001) {
    result = 0;
  }
  }
 
console.log(newArr)
  return result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(0));
console.log(reverse(1));
console.log(reverse(100000))
