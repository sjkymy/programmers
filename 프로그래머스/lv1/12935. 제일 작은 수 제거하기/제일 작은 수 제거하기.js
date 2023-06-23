function solution(arr) {
    let answer = arr.slice();
    let arrMin = Math.min(...arr);
    let indexMin = answer.indexOf(arrMin);
    answer.splice(indexMin, 1);
    
    if (answer.length === 0) {
        return [-1]
    }
    
    return answer;
}