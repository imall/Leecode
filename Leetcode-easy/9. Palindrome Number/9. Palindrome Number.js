export const isPalindrome = function (x) {
    if (x < 0) return;

    let reverse = 0;
    let temp = x;
    while (temp > 0) {
        reverse = temp % 10 + reverse * 10

        temp = Math.floor(temp / 10)
    }

    return (reverse === x)
};



