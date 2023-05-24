import React, {useEffect, useState} from 'react';

const Box = ({paddingMode, topComponent, children, bottomComponent, className}) => {
  const [padding, setPadding] = useState("");

  useEffect(() => {
    if (paddingMode === "rank") setPadding("box_rank");
    else if (paddingMode === "big") setPadding("box_big");
  }, [paddingMode]);

  return (
    <div
      className={`box ${padding} ${className}`}
    >
      {
        topComponent && (
          <div className={'box__top'}>
            {topComponent}
          </div>
        )
      }

      {children}

      {
        bottomComponent && (
          <div className={'box__bottom'}>
            {bottomComponent}
          </div>
        )
      }
    </div>
  );
};

export default Box;