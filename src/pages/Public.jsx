/* eslint-disable no-plusplus */
import React from 'react';
import useTitle from '../hooks/useTitle';
import styles from './Public.module.scss';

function Public() {
  function revSpecstring(n) {
    const test = n.split(/\d+|\w+/gi);
    console.log(test, 'test');
    const test2 = n
      .split(/\W+|\D+/g)
      .map((x) => x.split('').reverse().join(''));
    console.log(test2, 'test2');
    return test2
      .reverse()
      .map((x, i) => test[i] + x)
      .join('');
  }

  console.log(revSpecstring('AFC##47GH$Ieu'), 'ueI#47HG$CFA');

  const sumRound = (n) =>
    n
      .toString()
      .split('')
      .reverse()
      .map((x, i) => +(x + '0'.repeat(i)))
      .filter((x) => x > 0)
      .join(' ');
  // https://edabit.com/challenge/cfkBaFXFcGomJBX2j
  console.log(sumRound(1010), 'sumRound');

  function totalPoints(guesses, word) {
    return guesses.map((x) => word.match(`${x.split('')}`));
  }

  console.log(totalPoints(['cat', 'create', 'sat'], 'caster'), 'totalPoints');

  const count = (n) => (Math.abs(n) < 10 ? 1 : 1 + count(n / 10));

  console.log(count(318));

  function sameVowelGroup(w) {
    const res = [];

    const vowels = w
      .map((x) => x.match(/[aeiou]/g))
      .map((x) => [...new Set(x)].sort().join(''));

    vowels.forEach((x, i) => {
      if (x === vowels[0]) {
        res.push(w[i]);
      }
    });

    return res;
  }

  console.log(sameVowelGroup(['hoops', 'chuff', 'bot', 'bottom']), 'sameVowel');

  const isPalindrome = (wrd) => {
    if (wrd.length < 2) {
      return true;
    }
    if (wrd[0] === wrd.slice(-1)) {
      return isPalindrome(wrd.slice(1, -1));
    }
    return false;
  };

  console.log(isPalindrome('madam'), 'haha');

  function nearestVowel(s) {
    return s;
  }

  console.log(nearestVowel('a'), 'nearest');

  const result = nearestVowel('h');

  useTitle('Yoo Test');
  return (
    <div className={styles.container}>
      <h1 className={styles.test}>{result}</h1>
    </div>
  );
}

export default Public;
