function solution(brown, yellow) {
    const total = brown + yellow;

    // total의 약수를 구하는 함수
    function getDivisors(n) {
        const divisors = [];
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                divisors.push(i);
            }
        }
        return divisors;
    }

    const divisors = getDivisors(total);

    for (const divisor of divisors) {
        const quotient = total / divisor;
        if ((quotient - 2) * (divisor - 2) === yellow) {
            return [quotient, divisor];
        }
    }
}