import React from 'react';
import useTitle from '../hooks/useTitle';
import styles from './Public.module.scss';

function Public() {
  const secret = (num) => {
    const d = [...`${num}`];
    const d1 = +d[0];
    const d2 = +d[1];

    return d1 ** d2 - d1 * d2;
  };

  const result = secret(23);

  const result2 = secret(25);
  const result3 = secret(15);

  useTitle('Yoo Test');
  return (
    <div className={styles.container}>
      <h1 className={styles.test}>23 {result} = 2</h1>

      <h2 className="test">25 {result2} = 22</h2>
      <h2>15 {result3} = -4</h2>
    </div>
  );
}

export default Public;
