import React from 'react';
import useTitle from '../hooks/useTitle';
import styles from './Public.module.scss';

function Test() {
  useTitle('Yoo Test');
  return (
    <div className={styles.container}>
      <h1>Hallo</h1>
    </div>
  );
}

export default Test;
