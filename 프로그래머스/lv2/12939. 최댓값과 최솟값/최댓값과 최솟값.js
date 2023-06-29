function solution(s) {
    var answer = [];
    let numArr = s.split(' ').map(Number);
    let numArrMin = Math.min(...numArr)
    let numArrMax = Math.max(...numArr)
    answer.push(numArrMin);
    answer.push(numArrMax);
    return answer.join(' ');
}