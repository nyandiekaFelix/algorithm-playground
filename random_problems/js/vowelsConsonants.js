/**
 * @function vowelsAndConsonants
 * @descriprion Separate vowels and consonants in order as they appear in provided string
 * @param {string} str
 */

function vowelsAndConsonants(str) {
  const vowels = [];
  const consonants = [];

  Array.from(str.toLowerCase()).forEach(letter => {
    'aeiou'.includes(letter) ? vowels.push(letter) : consonants.push(letter);
  });

  console.info(vowels);
  console.info(consonants);
}

vowelsAndConsonants('vowelsandconsonants');
