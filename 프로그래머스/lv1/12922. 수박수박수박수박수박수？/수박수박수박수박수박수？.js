function solution(n) {
    let answer = '';
    let str = "수박";
    for (let i = 0; i < n; i++) {
        answer += str[i % 2]
    } 
    return answer
}