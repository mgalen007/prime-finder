// prime-finder algorithm implementation

const primes = [1, 2]

for (let n = 3; n <= 100; n++) {
    let isPrime = true
    for (let i = 2; i <= Math.ceil(n/2); i++) {
        if (n % i == 0) isPrime = false
    }
    if (isPrime) primes.push(n)
}


console.log(primes)