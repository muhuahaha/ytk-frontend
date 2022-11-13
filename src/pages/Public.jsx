/* eslint-disable no-plusplus */
import React from 'react';
import useTitle from '../hooks/useTitle';
import styles from './Public.module.scss';

function Public() {
  const dakiti = (str) =>
    str
      .split(' ')
      .map((x) => [+x.match(/\d/g), x.match(/\D/g).join('')])
      .sort((a, b) => a[0] - b[0])
      .map((x) => x[1])
      .join(' ');

  const result = dakiti('en5tere y2a bab1y y3o 4me s6e not7a cuand8o 9me-ves');

  function nextSquare(n) {
    if (n ** 0.5 % 2 === 0) {
      return n;
    }
    return nextSquare(n + 1);
  }

  const result2 = nextSquare(155);

  function transposeMatrix(mtx) {
    console.log(mtx.map((x) => x.map((y, i) => [y, i])));
    return mtx;
  }
  const result3 = transposeMatrix([
    ['You', 'the'],
    ['must', 'table'],
    ['transpose', 'order.'],
  ]);

  useTitle('Yoo Test');
  return (
    <div className={styles.container}>
      <h1 className={styles.test}>
        {result} = baby ya yo me entere se nota cuando me-ves
      </h1>
      <h2>{result2.toString()} </h2>
      <h2>{result3}</h2>
      <h2>You must transpose the table order.</h2>
    </div>
  );
}

export default Public;
