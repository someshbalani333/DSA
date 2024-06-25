// Brute force
const trailingZeroesBrute = (n) => {
    let fac = 1;
    while(n > 0) {
        fac = fac*n;
        n--;
    }

    let res = 0;
    while(fac % 10 === 0) {
        res++;
        fac = Math.floor(fac/10);
    }

    return res;
}

// TC: n + logn

trailingZeroesBrute(10)

const trailingZeroesOptimized = (n) => {
    let res = 0;
    for(let i = 5; i <= n; i = i * 5) {
        res = res + Math.floor(n/i);
    }

    console.log(res);

    return res;
}

// TC: logn

trailingZeroesOptimized(251);
