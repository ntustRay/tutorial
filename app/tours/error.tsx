'use client'

import React from 'react';

const Error = ({error}: {error: Error}) => {
  console.error(error);
  return (
    <div>
      there was an error...
    </div>
  );
}

export default Error;
