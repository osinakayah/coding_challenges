/*
An integer d is a divisor of an integer  if the remainder of n/d = 0.

Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

Note: Each digit is considered to be unique, so each occurrence of the same digit should be counted (e.g. for , n=111, 1  is a divisor of 111 each time it occurs so the answer is 3).

Function Description

Complete the findDigits function in the editor below. It should return an integer representing the number of digits of d that are divisors of d.

findDigits has the following parameter(s):

n: an integer to analyze
 */



function findDigits(n) {
    var numbersASString = n.toString();
    var number = 0;
    for(var i = 0; i < numbersASString.length; i++){
        if(n % numbersASString[i] == 0) {
            number++;
        }
    }
    return number;
}