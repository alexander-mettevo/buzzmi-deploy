import React from 'react';

const Verified = ({isVerified}) => {
  if (!isVerified) return null

  return (
    <img src="/images/assets/verified.svg" alt="verified"/>
  );
};

export default Verified;