import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

export default function DataComponent({url}) {
  const [data] = useJsonFetch(url)
  return (
    <div>
			<p>{`Data - ${JSON.stringify(data)}`}</p>
    </div>
  )
}
