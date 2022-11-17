/* eslint-disable no-plusplus */
import React from 'react';
import useTitle from '../hooks/useTitle';
import styles from './Public.module.scss';

function Public() {
  const holes = {
    4: 1,
    6: 1,
    8: 2,
    9: 1,
    0: 1,
  };

  function holeySort(arr) {
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
  }

  const result4 = holeySort([100, 888, 1660, 11]);

  console.log(result4);

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

  function sortByLastName(books) {
    return books.sort((a, b) =>
      a.author.split(' ')[1].localeCompare(b.author.split(' ')[1])
    );
  }

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

  function lastNameLensort(names) {
    return names
      .map((x) => x.split(' '))
      .sort((a, b) => a[1].length - b[1].length || a[1].localeCompare(b[1]))
      .map((x) => x.join(' '));
  }

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
      <h1 className={styles.test}>[11, 100, 1660, 888]</h1>
      {/* <h2>{result2.toString()} </h2> */}

      <h2>{result4.toString()}</h2>
    </div>
  );
}

export default Public;
