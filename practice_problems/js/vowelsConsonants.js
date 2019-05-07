/**
 * @function vowelsAndConsonants
 * @descriprion Separate vowels and consonants in order as they appear in provided string
 * @param {string} str
 */

function vowelsAndConsonants(str) {
  const vowels = 'aeiou';

  const isVowel = (str) =>
    Array.from(str).filter(letter => vowels.includes(letter));

  const isConsonant = (str) =>
    Array.from(str).filter(letter => !vowels.includes(letter));

  console.info(isVowel(str));
  console.info(isConsonant(str));
}

vowelsAndConsonants('javascriptloops');
