function solution(n) {
    let answer = 0;
    let init = 0;
    let next = 1;
    for (let i = 2; i <= n; i++) {
        answer = (init + next) % 1234567;
        init = next;
        next = answer;
    }
    return answer;
}