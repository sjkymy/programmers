function solution(num_list) {
    let evenCount = num_list.filter(v => v % 2 === 0).length;
    return [evenCount, num_list.length-evenCount]
}