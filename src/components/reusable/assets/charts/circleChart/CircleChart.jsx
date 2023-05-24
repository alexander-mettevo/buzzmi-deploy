import React, {useEffect, useRef, useState} from 'react';
import styles from './circle-chart.module.scss';
import Progress from './Progress.jsx';
import Avatar from "../../avatar/Avatar.jsx";

const CircleChart = ({progress, withAvatar}) => {
  const [progressProps, setProgressProps] = useState({
    strokeWidth: 5,
    size: 48,
    sizeDifference: 1,
  });
  const [chartBg, setChartBg] = useState(null);
  const ref = useRef(null);



  useEffect(() => {
    if (withAvatar) {
      setProgressProps({
        strokeWidth: 30,
        size: 400,
        sizeDifference: 5,
      });
    } else {
      setProgressProps({
        strokeWidth: 50,
        size: 500,
        sizeDifference: 1,
      });
    }
  }, [withAvatar]);

  useEffect(() => {
    setChartBg(window.getComputedStyle(ref.current).getPropertyValue('--chart-bg'));
  });

  return (
    <div className={styles["circle-chart__wrapper"]} ref={ref}>
      <div className={withAvatar ? styles["circle-chart__with-avatar"] : ""}>
        <Progress
          progress={progress}
          hideBall
          hideValue
          reduction={0}
          transitionDuration={3}
          background={chartBg}
          gradient={[{stop: 0.6, color: '#F498E3'}, {stop: 0.8, color: '#EE6CD3'}, {stop: 1, color: '#B0319B'}]}
          {...progressProps}
        />
        {withAvatar && (
          <div className={styles["circle-chart__avatar"]}>
            <Avatar mode={'small'} src={'https://m.media-amazon.com/images/M/MV5BMTM3MzY2MDYwOF5BMl5BanBnXkFtZTcwODQ3MDA0Nw@@._V1_.jpg'}/>
          </div>
        )}

        <div className={withAvatar ?  styles["circle-chart__outer-value"] : styles["circle-chart__inner-value"]}>
          <div>{progress}%</div>
          <div>Completed</div>
        </div>
      </div>

    </div>

  );
};

export default CircleChart;