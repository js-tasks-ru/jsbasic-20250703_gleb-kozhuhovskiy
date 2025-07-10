function checkSpam(str) {
  // ваш код.. '1xBet' или 'XXX'
  const lstr = str.toLowerCase()
  return lstr.includes('1xBet'.toLowerCase() ) || lstr.includes('XXX'.toLowerCase() );
}
