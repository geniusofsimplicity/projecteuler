// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

var myNumber = function(number) {
  if (number % 3 === 0 || number % 5 === 0) {
    return number;
  } else {
    return 0;
  }
}
var sum = 0;
for( i = 1; i < 1000; i++){
	sum += myNumber(i)
}

console.log(sum);