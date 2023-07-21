function solution(n, words) {
  let spokenWords = new Set();
  let lastChar = words[0][0];
  let turn = 1;
  let playerNumber = 1;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
      
    if (word.length < 2 || word[0] !== lastChar || spokenWords.has(word)) {
      return [turn, playerNumber];
    }

    spokenWords.add(word);
    lastChar = word[word.length - 1];

    turn++;
    if (turn > n) {
      turn = 1;
      playerNumber++;
    }
  }
  return [0, 0];
}