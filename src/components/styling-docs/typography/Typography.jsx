import React from 'react';

const Typography = () => {
  return (
    <div>

    </div>
  );
};

const TypographySection = () => {
  return (
    <div>

    </div>
  );
};

const TypographyItem = ({className, exampleText, styles}) => {
  return (
    <div>
      <div>
        {className}
      </div>
      <div>
        {styles}
      </div>
      <div className={className}>
        {exampleText}
      </div>
    </div>

  );
};

export default Typography;