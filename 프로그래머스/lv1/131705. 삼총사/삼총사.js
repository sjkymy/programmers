function solution(number) {
    let answer = 0;
    for (let i = 0; i < number.length; i++) {
        for (let j = i+1; j < number.length; j++) {
            for (let n = j+1; n < number.length; n++) {
                if (number[i] + number[j] + number[n] === 0) {
                    answer++
                }
            }
        }
    };
    return answer;
}