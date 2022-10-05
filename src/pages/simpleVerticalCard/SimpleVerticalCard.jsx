import {
  Box, Grid,
} from '@material-ui/core';
import React, { useState } from 'react';

import Widget from '../../components/Widget/Widget';
import ExtraLink from '../../utils/ExtraLink';
import cardData from './CardData';
import ExampleCard from './ExampleCard';
import FilterAndSortBar from './filterAndSortBar/FilterAndSortBar';

// Page Layout
export default function SimpleVerticalCardPage() {
  const [cardsData, setCards] = useState({ cards: cardData });

  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={4}>
          <Widget title="Simple Vertical Card" disableWidgetMenu>
            <Grid item xs={12}>
              <FilterAndSortBar
                setCards={setCards}
              />
            </Grid>
            <Grid container item sm={12}>
              <Grid container spacing={6} item>
                {cardsData.cards.map((data) => (
                  <Grid key={`cards-${data.title}`} item xs={12}>
                    <ExampleCard {...data} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={4}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Card Material UI Component"
            link="https://material-ui.com/components/cards/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
