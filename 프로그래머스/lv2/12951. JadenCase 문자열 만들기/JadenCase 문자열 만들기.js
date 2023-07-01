function solution(s) {
    let strDivide = s.split(' ');
    let JadenCase = strDivide.map((word) => {
        if (word.length === 0) {
          return '';
        }
        let first = word[0].toUpperCase();
        let rest = word.slice(1).toLowerCase();
        return first + rest;
    })
    return JadenCase.join(' ')
}