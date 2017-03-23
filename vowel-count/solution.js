function getCount(str) {
  let vowelsCount = 0;
  const vowels = 'aeiou';
  
  // Iterate Over Given String
  for (let letter = 0; letter < str.length; letter++) {

    // Check the string for an occurence of a vowel and update the count 
    if (vowels.indexOf(str[letter]) > -1){
      vowelsCount++;
    }
  }
  // enter your majic here
  
  return vowelsCount;
}
