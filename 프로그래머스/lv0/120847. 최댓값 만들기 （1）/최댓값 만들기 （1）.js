function solution(numbers) {
    const arrNum = numbers.sort((a, b) => b - a)
    
    return arrNum[0] * arrNum[1]
}