function countWords(inputWords) {
  return inputWords.reduce(function(totalCount, currentWord) {
    (totalCount[currentWord]++) || (totalCount[currentWord] = 1);
    return totalCount;
  }, {});
}

module.exports = countWords;
