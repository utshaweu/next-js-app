import React from 'react';

const page = ({params}) => {
  return (
    <div>
      <p>user list catch all segments page route: {params?.id}</p>
    </div>
  )
}

export default page