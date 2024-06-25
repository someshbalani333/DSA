const palindrome = (x) => {
    let num = x;
    let palindromeNum = 0;
    while(num !== 0) {
        let lastDigit = num % 10;
        palindromeNum = lastDigit + palindromeNum*10;
        num = Math.floor(num/10);
    }

    return (palindromeNum === x);
 }

 // TC: O(Logn)

console.log(palindrome(9235))
console.log(palindrome(121))