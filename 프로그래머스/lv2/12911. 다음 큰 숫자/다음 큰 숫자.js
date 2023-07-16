function oneCount(n) {
    return n.toString(2).split('').filter((e) => e === "1").length;
};

function solution(n) {
    const targetCount = oneCount(n);
    
    let nextN = n + 1;
    
    while (oneCount(nextN) !== targetCount) {
        nextN++
    }
    return nextN;
}