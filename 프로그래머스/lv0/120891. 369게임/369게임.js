function solution(order) {
    let orderArr = order.toString().split('').map(Number);
    let arr = orderArr.filter(i => i > 1 && i % 3 === 0);
    return arr.length
}