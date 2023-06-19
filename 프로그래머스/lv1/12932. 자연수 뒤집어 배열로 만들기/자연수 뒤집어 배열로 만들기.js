function solution(n) {
    let reversed = n.toString().split("").reverse()
    
    return reversed.map(Number);
}