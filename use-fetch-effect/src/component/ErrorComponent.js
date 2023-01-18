import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function ErrorComponent({url}) {
  const [error] = useJsonFetch(url)
  console.log(url);
  return (
    <div>
      <p>{`Error - ${JSON.stringify(error)}`}</p>
    </div>
  )
}