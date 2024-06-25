const countDigits = (x) => {
    let count = 0;
    while(x != 0) {
        x = Math.floor(x/10);
        count++;
    }
    console.log(count);
}

// TC: O(Logn)

countDigits(9235);
