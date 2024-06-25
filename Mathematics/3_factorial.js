const factorial = (num) => {
    let f = 1;
    while(num > 0) {
        f = f * num;
        num--;
    }

    return f;
}

// TC: O(n)
// SC: O(1)

const recFactorial = (num) => {
    if(num == 0)
        return 1;
    else
        return num*recFactorial(num-1)
}


console.log(recFactorial(4));
