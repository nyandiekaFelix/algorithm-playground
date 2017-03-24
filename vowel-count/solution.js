function getCount(str) {
  let vowelsCount = 0;
  
  const vowels = ['a', 'e', 'i', 'o', 'u']; 
   /* a string with the vowels might just work
    * const vowels = 'aeiou';
    */

  // Iterate Over Given String
  for (let letter = 0; letter < str.length; letter++) {

    /* Check the string for an occurence of a vowel and update the count 
     * indexOf() returns either the position of the occurence or -1
     */
    if (vowels.indexOf(str[letter]) > -1){
      vowelsCount++;
    }
  }
  
  return vowelsCount;
}

console.log(getCount('someString')); // 3


