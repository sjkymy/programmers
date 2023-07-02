function solution(n, m) {
  let answer = [];
  
  let max = Math.max(n, m);
  let min = Math.min(n, m);

  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  let gcdResult = gcd(max, min);
  answer.push(gcdResult);

  let lcmResult = (n * m) / gcdResult;
  answer.push(lcmResult);

  return answer;
}