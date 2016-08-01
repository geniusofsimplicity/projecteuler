/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var isPrime = function(number){
	for(i = 2; i < number; i++){
		if(number % i === 0){
			return false;
		}
	}
	return true;
}
// find next prime starting with "number" and searching up untill "test"
var nextPrime = function(number, test){
	do{
		number++;
		if(isPrime(number)){
			return number;
		}
	}while(number < test)
}

var findFactor  = function(test){
	var prime = 2;
	while(prime < test){
		if(test % prime === 0){
			return prime;
		}
	prime = nextPrime(prime, test);
	}
	return test;
}

var test = 600851475143;
var factor = 2;
var largetsPrimeFactor = 1;
while(factor < test){
	factor = findFactor(test);
	if(factor > largetsPrimeFactor){
		largetsPrimeFactor = factor;
	}
	test = test / factor;
}


console.log(largetsPrimeFactor);