import React from 'react'
import useTitle from '../hooks/useTitle';

function Public() {
  useTitle('Yoo Test');
  return (
    <div>Public</div>
  )
}

export default Public