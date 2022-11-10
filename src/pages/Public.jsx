import React from 'react';
import useTitle from '../hooks/useTitle';

function Public() {
  const secret = (num) => {
    const digits = num.toString().split('');
    const digitOne = +digits[0];
    const digitTwo = +digits[1];

    return digitOne ** digitTwo - digitOne * digitTwo;
  };

  const result = secret(23);

  const result2 = secret(25);
  const result3 = secret(15);

  useTitle('Yoo Test');
  return (
    <div>
      <h1>23 {result} = 2</h1>

      <h2>25 {result2} = 22</h2>
      <h2>15 {result3} = -4</h2>
    </div>
  );
}

export default Public;
