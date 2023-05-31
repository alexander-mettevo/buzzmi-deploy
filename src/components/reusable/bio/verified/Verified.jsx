import React from 'react';

const Verified = ({isVerified}) => {
  return !isVerified ? null : (
    <img src="/images/assets/verified.svg" alt="verified"/>
  );
};

export default Verified;