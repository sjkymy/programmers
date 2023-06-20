function solution(a, b) {
    let sum = 0;
    if (a > b) {
        for (let i = b; i <= a; i++ ) {
            sum = sum + i
        }
    } else if (b > a) {
        for (let i = a; i <= b; i ++) {
            sum = sum + i
        }
    } else {
        return a
    }
    return sum;
}