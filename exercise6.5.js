const sumOfNum = (x) => {
   return function (y) {
      return x + y
   }
}

const addOfNumbers = sumOfNum(5)
addOfNumbers(10)