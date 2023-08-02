function solution(s) {
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            answer++;
        } else if (s[i] === ')') {
            if (answer === 0) {
                return false;
            }
            answer--;
        }
    }

    return answer === 0;
}