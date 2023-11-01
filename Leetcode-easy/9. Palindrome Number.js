const isPalindrome = function(x) {
    if (x < 0) return;

    let reverse = 0;
    let temp = x;
    while(temp > 0){
        reverse = temp%10 + reverse*10
        temp = Math.floor(temp/10) 
    }

    console.log(reverse)
    console.log(x)
    return reverse === x
};

console.log(isPalindrome(Number.MAX_SAFE_INTEGER))
