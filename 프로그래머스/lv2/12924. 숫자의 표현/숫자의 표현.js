function solution(n) {
  let count = 0;
  
  for (let start = 1; start <= n; start++) {
    let sum = 0;
    let current = start;
    
    while (sum < n) {
      sum += current;
      current++;
    }
    
    if (sum === n) {
      count++;
    }
  }
  
  return count;
}