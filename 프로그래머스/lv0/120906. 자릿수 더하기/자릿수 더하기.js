function solution(n) {
    let answer = 0;
    let a = [...n.toString()];
    let b = a.map(v => Number(v))
    for (let i = 0; i < b.length; i++) {
        answer += b[i]
    }
    return answer;
}