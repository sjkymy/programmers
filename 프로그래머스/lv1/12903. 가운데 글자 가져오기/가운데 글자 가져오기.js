function solution(s) {
    let answer = '';
    if (s.length % 2 !== 0) {
        let oddIndex = Math.floor(s.length / 2);
        answer = s[oddIndex]
    } else {
        let  evenIndex = s.length / 2
        answer = s.slice(evenIndex-1, evenIndex+1)
    }
    return answer;
}