function solution(s) {
    let answer = '';
    let sorting  = s.split('').sort((a,b) => a > b ? -1 : 1);
    for (let i = 0; i < sorting.length; i++) {
        answer += sorting[i];
    }
    return answer;
}