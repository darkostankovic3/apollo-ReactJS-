import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useStyles, ANIMATION_DURATION_S } from './ApolloProgress.styles';

const ApolloProgress = ({
  className,
}) => {
  const classes = useStyles();

  const NUMBER_OF_DOTS = 4;
  const BASE_DELAY = 0.1;
  const DELAY_INCREMENT = 0.2;

  // Determines the animationDelay of a particular dot in the order it's animating
  function determineDelay(dotNumber, numericFormat = false) {
    const delaySeconds = BASE_DELAY + (DELAY_INCREMENT * dotNumber);
    return numericFormat ? delaySeconds : `${BASE_DELAY + (DELAY_INCREMENT * dotNumber)}s`;
  }

  // gets an array of all the delays for the dots
  function getDelays(numericFormat = false) {
    return new Array(NUMBER_OF_DOTS).fill(null).map((_, i) => determineDelay(i + 1, numericFormat));
  }

  const [animationDelays, setAnimationDelays] = useState(getDelays());
  const [animateForward, setIsAnimatingForward] = useState(true);

  useEffect(() => {
    const animationTimeout = setInterval(() => {
      setAnimationDelays(animationDelays.reverse());
      setIsAnimatingForward(!animateForward);
    }, (ANIMATION_DURATION_S + BASE_DELAY + DELAY_INCREMENT) * 1000);

    // clear timeout when the component unmounts
    return () => clearInterval(animationTimeout);
  },
  [animateForward]);

  return (
    <div className={classnames(className, classes.wrapper)}>
      {new Array(NUMBER_OF_DOTS).fill(null).map((_, i) => (
        <div
          key={`dot${i + 1}-${animateForward ? 'forward' : 'backward'}`}
          className={classnames(
            classes.loaderDot,
            classes[`dot${i + 1}`],
            animateForward ? classes.loadingForwardAnimation : classes.loadingBackwardAnimation,
          )}
          style={{
            animationDelay: animationDelays[i],
          }}
        />
      ))}
    </div>
  );
};

ApolloProgress.defaultProps = {
  className: '',
};

ApolloProgress.propTypes = {
  className: PropTypes.string,
};

export default ApolloProgress;
