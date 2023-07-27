function solution(t, p) {
    let answer = 0;
    for (let i = 0; i <= t.length - p.length; i++) {
        let part = t.slice(i, i+p.length);
        if (parseInt(part) <= parseInt(p)) {
            answer++
        }
    };
    
    return answer;
}