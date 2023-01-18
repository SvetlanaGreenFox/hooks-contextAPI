import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function LoadComponent({url}) {
  const [loading] = useJsonFetch(url)
  
  return (
    <div>
      <p>{`Loading - ${JSON.stringify(loading, null, ' ')}`}</p>
    </div>
  )
}