const getTheDegreeOfNumber = (n, x) => {
   let sum = 1
   for (i = 1; i <= n; i++) {
      sum *= x
   }
   return sum
}

getTheDegreeOfNumber(5, 3)