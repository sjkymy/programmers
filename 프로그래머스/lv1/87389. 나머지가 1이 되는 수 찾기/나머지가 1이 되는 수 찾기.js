function solution(n) {
    let answer = [];
    for (let x = 0; x < n; x++ ) {
        if (n % x === 1) {
            answer.push(x)
        }
    }
    return answer[0];
}