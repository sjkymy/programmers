function solution(my_string) {
    let addNumber = [...my_string.replace(/[^0-9]/g, '')];
    let result = 0;
    
    for (let i = 0; i < addNumber.length; i++) {
        result += Number(addNumber[i])
    }
    return result
}