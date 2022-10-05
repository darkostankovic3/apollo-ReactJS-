import React from 'react';

import SimpleVerticalCard from '../../components/SimpleVerticalCard/SimpleVerticalCard';

const handleCardClick = () => {
  /* eslint-disable no-console */
  console.log('card click callback');
};

const handleStarClick = () => {
  /* eslint-disable no-console */
  console.log('star click callback');
};

function ExampleCard(props) {
  return (
    <SimpleVerticalCard
      {...props}
      onCardClickCallback={handleCardClick}
      onStarClickCallback={handleStarClick}
    />
  );
}

export default ExampleCard;
