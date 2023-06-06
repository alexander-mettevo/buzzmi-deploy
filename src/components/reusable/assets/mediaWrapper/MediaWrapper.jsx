import React from 'react';

const MediaWrapper = ({iconSrc = '/images/assets/forms/image.svg', onClick, ...props}) => {
  return (
    <button onClick={onClick} className='media-wrapper' {...props}>
      <img src={iconSrc} alt='media-icon' className='media-wrapper__icon'/>
    </button>
  );
};

export default MediaWrapper;