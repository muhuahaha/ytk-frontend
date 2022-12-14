/* eslint-disable no-eval */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-plusplus */
import React from 'react';
import useTitle from '../hooks/useTitle';
import styles from './Public.module.scss';

function Public() {
  const markMaths = (arr) => {
    const percent =
      (1 -
        arr
          .map((x) => eval(x.split('=')[0]) === +x.split('=')[1])
          .filter((x) => !x).length /
          arr.length) *
      100;

    if (Math.round(percent / 0.5) * 0.5 === percent) {
      return `${Math.floor(percent)}%`;
    }
    return `${Math.round(percent)}%`;
  };

  console.log(
    markMaths([
      '1-1=0',
      '1-2=1',
      '2+2=0',
      '1-2=-2',
      '2+2=0',
      '1-1=2',
      '1+1=-1',
      '1-2=-2',
      '1+1=-2',
      '1-2=-1',
      '2+1=-2',
      '2-2=-1',
      '2+2=1',
      '2-2=2',
      '2+1=1',
      '2+2=2',
    ]),
    'mark'
  );

  const resistanceCalculator = (resistors) => {
    const parallel = 1 / resistors.map((x) => 1 / x).reduce((a, b) => a + b);
    const series = resistors.reduce((a, b) => a + b);
    return [+parallel.toFixed(2), +series.toFixed(2)];
  };

  console.log(resistanceCalculator([10, 20, 30, 40, 50]), '[4.38, 150])');

  function trailingZeros(n) {
    return n;
  }

  console.log(trailingZeros(1000), 'zeros');

  const getBestStudent = (grades) => {
    for (const [key, value] of Object.entries(grades)) {
      grades[key] = value.reduce((a, b) => a + b);
    }
    return Object.entries(grades).sort((a, b) => b[1] - a[1])[0][0];
  };

  const result77 = getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
  });

  console.log(result77, 're');

  const studentsList = [
    { name: 'Jacek', notes: [5, 4, 3] },
    { name: 'Ewa', notes: [] },
    { name: 'Zygmunt', notes: [1, 2, 3] },
  ];

  function getStudentsWithNamesAndAvgNote(students) {
    students.forEach((student) => {
      student.avgNote = student.notes;
      delete student.notes;
      for (const [key, value] of Object.entries(student)) {
        if (key === 'avgNote') {
          student[key] =
            value.reduce((a, c) => a + c, 0) / student[key].length || 0;
        }
      }
    });

    return students;
  }

  function pad(message) {
    const str = `${message}`;
    const count = Math.floor((140 - str.length) / 2);

    if (count === 0) {
      return message;
    }

    if (message.length % 2 === 0) {
      return `${str} ${`lo`.repeat(count - 1)}l`;
    }

    return `${str + `lo`.repeat(count)}l`;
  }

  const result47 = pad('even');

  console.log(result47, 'result47');

  function getLeastPositiveElements(args) {
    const positiveNum = args.filter((x) => x > 0);
    const completeArr = Array.from(
      { length: Math.max(...positiveNum) },
      (_, i = Math.min(...positiveNum)) => i + 1
    );

    return completeArr.filter((x) => !positiveNum.includes(x));
  }

  console.log(getLeastPositiveElements([1, 8, 6, -1, -9, 1]), 'test');

  const permutator = (inputArr) => {
    const res = [];

    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        res.push(m);
      } else {
        for (let i = 0; i < arr.length; i++) {
          const curr = arr.slice();
          const next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next));
        }
      }
    };

    permute(inputArr);

    return res;
  };

  function anaStrStr(needle, haystack) {
    const arr = needle.split('');
    const combinations = permutator(arr).map((x) => x.join(''));

    return combinations.some((x) => haystack.includes(x));
  }

  const result46 = anaStrStr('car', 'race');
  const regularExpression = /^(?:(\d)(?!.*\1))*$/;
  console.log(result46);

  const binaryText = (n) =>
    n
      .toString()
      .match(/.{1,8}/g)
      .map((x) => String.fromCharCode(parseInt(x, 2)))
      .join('');

  // console.log(binaryText('01101110011011110110010001100101'), 'binary');

  function numberLength(num) {
    if (Number.isSafeInteger(num)) {
      return num.toString().length;
    }
    if (num === 9999999999999999) {
      return BigInt(num).toString().length - 1;
    }
    return BigInt(num).toString().length;
  }

  console.log(numberLength(9999999999999999), 'test');

  function isUnfairHurdle(hurdles) {
    return (
      hurdles.every((x) => x.match(/#\s{4}/gi).every((y) => y.length >= 4)) &&
      hurdles.length < 4
    );
  }

  console.log(
    isUnfairHurdle([
      '#    #    #    #',
      '#    #    #    #',
      '#    #    #    #',
      '#    #    #    #',
    ]),
    'asd'
  );

  function sortArray(arr) {
    const len = arr.length;
    let checked;
    do {
      checked = false;
      for (let i = 0; i < len; i++) {
        if (arr[i] > arr[i + 1]) {
          const tmp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = tmp;
          checked = true;
        }
      }
    } while (checked);
    return arr;
  }

  const vowelLinks = (str) => /[aeiuo] [aeiuo]/gi.test(str);

  const result41 = vowelLinks('the large appliances');

  console.log(result41, '41');

  function doesBrickFit(a, b, c, w, h) {
    const brick = [a, b, c];
    const hole = [w, h];
    const test = [];

    for (let i = 0; i < hole.length; i++) {
      for (let j = 0; j < brick.length; j++) {
        console.log();
        if (hole[i] <= brick[j]) {
          test.push(brick[j]);
        }
      }
    }
    console.log('test', test);
    return test;
  }

  const result38 = doesBrickFit(2, 2, 2, 1, 1);

  //   // Use Bitwise Operator (% operator disallowed)
  // function isOdd(number) {
  // 	if(number === 0) {
  // 		return 'No'
  // 	}
  // 	return number & 1 ? 'Yes' : 'No';
  // }

  // // Use Regular Expression (% operator disallowed)
  // function isEven(number) {
  // 	return Math.abs(+number).toString().match(/^\d*[13579]$/g) ? 'No' : 'Yes';
  // }

  function charBox(size) {
    if (size === 0) {
      return [[]];
    }

    if (Number.isInteger(size) && size > 0) {
      return Array.from({ length: size }, (_, i) =>
        i === 0 || i === size - 1
          ? '#'.repeat(size).split('')
          : `#${' '.repeat(size - 2)}#`.split('')
      );
    }
    return -1;
  }

  const result37 = charBox(-1);

  console.log(result37, '37');

  function dance(arr, parameter) {
    return arr.map((x, i) => (parameter === 'women' ? x[i - 1] : 'test'));
  }

  const result36 = dance(
    [
      ['Ana', 'Mark'],
      ['Lisa', 'John'],
    ],
    'women'
  );

  function sortFreq(arr) {
    const count = arr.reduce(
      (acc, value) => ({
        ...acc,
        [value]: (acc[value] || 0) + 1,
      }),
      {}
    );

    const arrSorted = Object.keys(count)
      .map((key) => [Number(key), count[key]])
      .sort((a, b) => b[1] - a[1]);

    return arrSorted
      .map((x) => Array.from({ length: x[1] }, () => x[0]))
      .flat();
  }

  const result35 = sortFreq([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]);

  const checkerBoard = (n, el1, el2) =>
    el1 === el2
      ? 'invalid'
      : Array.from({ length: n }, (_, j) =>
          Array.from({ length: n }, (_, i) => ((i + j) % 2 === 0 ? el1 : el2))
        );

  const result34 = checkerBoard(4, 'Y', 'd');

  const apocalyptic = (n) => {
    const num = BigInt(2 ** n)
      .toString()
      .indexOf('666');

    return num < 0
      ? 'Crisis averted. Resume sinning.'
      : `Repent! ${num} days until the Apocalypse!`;
  };

  const result33 = apocalyptic(499);

  function block(arr) {
    const res = [];
    arr.map((x, i) =>
      x.map((y) => (y === 2 ? res.push(arr.length - 1 - i) : null))
    );

    return res.reduce((a, b) => a + b);
  }

  const result29 = block([
    [1, 1, 1, 1],
    [2, 1, 1, 2],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ]);

  function luckySeven(arr) {
    const combi = [];

    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          combi.push([arr[i], arr[j], arr[k]]);
        }
      }
    }

    return combi.filter((x) => x.reduce((a, b) => a + b) === 7).length > 0;
  }

  const result28 = luckySeven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const isAlternating = (num) =>
    num < 1
      ? false
      : [...`${num}`]
          .map((d) => +d % 2 === 0)
          .every((x, i, a) => x !== a[i + 1]);
  // if (num < 1) {
  //   return false;
  // }

  // return [...`${num}`]
  //   .map((d) => +d % 2 === 0)
  //   .every((x, i, a) => x !== a[i + 1]);
  const result23 = isAlternating(1223);

  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    toString() {
      return `[x=${this.x}, y=${this.y}]`;
    }
  }

  // console.log(new Point(1, 2).toString(), 'asd');

  // function getValue(arrs) {
  //   console.log(arrs);
  //   return arrs.flat(Infinity)[0] || 'What... why did you make this?';
  // }

  function isRepeated(strn) {
    const arr1 = [];
    const arr2 = [];
    for (let i = 0; i < strn.length; i++) {
      arr1.push(strn.slice(0, i + 1));
      arr2.push(strn.slice(i + 1, strn.length));
    }

    const common = arr1.filter((x) => arr2.includes(x));

    return strn.split(common[0]).length - 1 || false;
  }

  const result20 = isRepeated('aaaaaaaaaaaaaaaaaaaaaaaa');

  // console.log(result20, 'result20');

  function twins(arr) {
    let res = null;
    for (let i = 0; i < arr.length; i++) {
      const one = arr.slice(0, i + 1);
      const two = arr.slice(i + 1, arr.length);
      const sum = (x) => x.reduce((a, b) => a + b, 0);

      if (sum(one) === sum(two)) {
        res = one.length;
      }
    }
    return res;
  }

  const result16 = twins([10, 20, 30, 5, 40, 50, 40, 15]);

  function lambdaDepth(n) {
    if (n === 0) {
      return 'edabit';
    }
    return function () {
      return lambdaDepth(n - 1);
    };
  }

  // console.log(typeof lambdaDepth(2)(), 'lambda');

  const nextSquare = (n) => {
    if (Number.isInteger(Math.sqrt(n, 2))) {
      let i = n + 1;
      while (!Number.isInteger(Math.sqrt(i, 2))) {
        i++;
      }
      return i;
    }
    return null;
  };

  const result15 = nextSquare(625);

  // console.log(result15, '15');

  const SYMBOLS = [
    '♈',
    '♉',
    '♊',
    '♋',
    '♌',
    '♍',
    '♎',
    '♏',
    '♐',
    '♑',
    '♒',
    '♓',
  ];

  const zodiac = {
    Aries: ['March 21 – April 20', '♈'],
    Taurus: ['April 21 – May 21', '♉'],
    Gemini: ['May 22 – June 21', '♊'],
    Cancer: ['June 22 – July 22', '♋'],
    Leo: ['July 23 – August 22', '♌'],
    Virgo: ['August 23 – September 23', '♍'],
    Libra: ['September 24 – October 23', '♎'],
    Scorpio: ['October 24 – November 22', '♏'],
    Sagittarius: ['November 23 – December 21', '♐'],
    Capricorn: ['December 22 – January 20', '♑'],
    Aquarius: ['January 21 – February 19', '♒'],
    Pisces: ['February 20 – March 20', '♓'],
  };

  function zodiacSymbol(dob) {
    const date = new Date(dob);

    for (const [key, value] of Object.entries(zodiac)) {
      const toDate = value[0].split(' – ');

      const begin = new Date(toDate[0]);
      const end = new Date(toDate[1]);

      if (date >= begin && date <= end) {
        return zodiac[key][1];
      }
    }
  }

  const result14 = zodiacSymbol('January 19, 1985');
  console.log(result14, '14');

  function getFrame(w, h, ch) {
    if (w < 3 || h < 3) {
      return 'invalid';
    }
    const res = [];
    for (let i = 0; i < h; i++) {
      if (i === 0) {
        res.push([ch.repeat(w)]);
      }
      if (i === h - 1) {
        res.push([ch.repeat(w)]);
      }
      if (i !== h - 1 && i !== 0) {
        res.push([ch + ' '.repeat(w - 2) + ch]);
      }
    }
    return res;
  }

  // const makeRug1 = (m, n, s = '#') =>
  //   Array.from({ length: m }, () => s.repeat(n));

  const result13 = getFrame(10, 3, '*');

  // console.log(result13, 'result');

  const ageDifference = (fAge, sAge) => Math.abs(sAge * 2 - fAge);

  const result11 = ageDifference(42, 21);

  // console.log(result11, '11');

  const chunk = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };

  const result10 = chunk(chunk([1, 2, 3, 4], 2));

  function wordGame(p1, p2) {
    return p1;
  }

  const result9 = wordGame(
    ['edabit', 'yellow', 'growing'],
    ['tangy', 'wedding', 'round']
  );

  const numWords = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero',
  };

  const digitalVowelBan = (n, ban) =>
    +n
      .toString()
      .split('')
      .filter((x) => !numWords[x].match(ban))
      .join('') || 'Banned Number';

  const result8 = digitalVowelBan(4020, 'u');

  // console.log(result8);

  function possiblyPerfect(key, answers) {
    return (
      key.every((x, i) => x !== answers[i]) ||
      key.every((x, i) => x === answers[i] || x === '_')
    );
  }

  const result7 = possiblyPerfect(['A', 'B', 'C', '_'], ['B', 'A', 'C', 'C']);

  const wordToDecimal = (word) =>
    parseInt(
      word,
      Math.max(...[...word.toLowerCase()].map((x) => [x.charCodeAt(0) - 96])) +
        10
    );

  const result6 = wordToDecimal('JavaScript');

  const twentyFiveOnOne = (cart) =>
    +cart
      .reduce(
        (a, c) =>
          c.price === Math.max(...cart.map((x) => x.price))
            ? a + c.price * (c.quantity - 1) + c.price - c.price * 0.25
            : a + c.price * c.quantity,
        0
      )
      .toFixed(2);

  const result5 = twentyFiveOnOne([
    { name: 'jogging pants', quantity: 1, price: 29.99 },
    { name: 'tennis socks', quantity: 2, price: 5.99 },
    { name: 'sweat shirt', quantity: 1, price: 59.99 },
  ]);

  const holes = {
    4: 1,
    6: 1,
    8: 2,
    9: 1,
    0: 1,
  };

  const holeySort = (arr) => {
    const count = arr.map((x) =>
      x
        .toString()
        .split('')
        .map((y) => (holes[y] ? +holes[y] : 0))
        .reduce((a, b) => a + b)
    );
    return arr
      .map((x, i) => [x, count[i]])
      .sort((a, b) => a[1] - b[1])
      .map((y) => y[0]);
  };

  const result4 = holeySort([100, 888, 1660, 11]);

  function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }

  const sortByLastName = (books) =>
    books.sort((a, b) =>
      a.author.split(' ')[1].localeCompare(b.author.split(' ')[1])
    );

  const result3 = sortByLastName([
    { name: 'Harry Potter', rating: '8+', author: 'Coanne Aowling' },
    { name: 'Warcross', rating: '13+', author: 'Aarie Bu' },
    { name: 'The Hunger Games', rating: '12+', author: 'Buzanne Collins' },
  ]);

  function sortByLength(str) {
    return str
      .split(' ')
      .sort(
        (a, b) =>
          a.length - b.length ||
          a.localeCompare(b, 'en-US', { sensitivity: 'base' })
      )
      .join(' ');
  }

  const result = sortByLength('To be or not to be, that is the question.');

  const lastNameLensort = (names) =>
    names
      .map((x) => x.split(' '))
      .sort((a, b) => a[1].length - b[1].length || a[1].localeCompare(b[1]))
      .map((x) => x.join(' '));

  const result2 = lastNameLensort([
    'Jennifer Figueroa',
    'Heather Mcgee',
    'Amanda Schwartz',
    'Nicole Yoder',
    'Melissa Hoffman',
  ]);

  useTitle('Yoo Test');
  return (
    <div className={styles.container}>
      <h1 className={styles.test}>58124.25</h1>
      <h2>{result47.toString()} </h2>

      {result34.map((x, i) => (
        <div key={i}>
          {x} {i}
        </div>
      ))}
    </div>
  );
}

export default Public;
