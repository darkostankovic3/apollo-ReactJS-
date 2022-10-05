import React from 'react';
import {
  Alarm, Check, Extension, People,
} from '@material-ui/icons';
import { Grid } from '@material-ui/core';
import { DueDate, Time, Title } from '../../../components/ListChart/components';
import Dot from '../../../components/General/Dot';
import { Avatar } from '../../../components/Wrappers/Wrappers';

const oneColSample = [
  {
    col1: (
      <Title
        icon={<Alarm />}
        title="Veeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeery long title taking up the whole row"
        subtitle="Also a very long subtitle, see what I mean?"
      />
    ),
  },
  {
    col1: (
      <Grid container alignItems="center">
        <Grid container justify="flex-start" item xs>
          <Title title="Title" subtitle="Subtitle" />
        </Grid>
        <Grid container justify="flex-end" item xs>
          <DueDate dueDate="Due 03-Jan-2019" />
        </Grid>
      </Grid>
    ),
  },
];

const twoColSample = [
  {
    col1: <Check />,
    col2: <Alarm />,
  },
  {
    col1: <Title title="Title" subtitle="Subtitle" />,
    col2: <DueDate dueDate="Due 03-Jan-2019" />,
  },
  {
    col1: <Title icon={<Check />} title="Title" subtitle="Subtitle" />,
    col2: (
      <Grid container alignItems="flex-end" justify="center" direction="column">
        <Time time="5:56 pm" />
        <Dot color="success" size="xxsmall" />
      </Grid>
    ),
  },
  {
    col1: <Title title="Title" subtitle="Subtitle" />,
    col2: (
      <Grid container alignItems="center" justify="flex-end">
        <Dot color="warning" size="xxsmall" style={{ marginRight: '16px' }} />
        <DueDate dueDate="04-AUG-2020" />
      </Grid>
    ),
  },
];

const threeColSample = [
  {
    col1: <Check />,
    col2: <Alarm />,
    col3: <Extension />,
  },
  {
    col1: <Title title="Title" subtitle="Subtitle" />,
    col3: <Avatar />,
    col2: <DueDate dueDate="Due 03-Jan-2019" />,
  },
];

const actionPanel = [
  {
    col1: <Title icon={<People style={{ width: '14px' }} />} title="Conference" />,
    col2: (
      <Grid container alignItems="center" justify="flex-start">
        <Grid item>
          <Dot color="success" size="xxsmall" style={{ marginRight: '8px' }} />
        </Grid>
        <Grid item xs>
          <DueDate dueDate="5 days since the end date" />
        </Grid>
      </Grid>
    ),
    col3: <DueDate dueDate="01/02/2019" />,
  },
];

export {
  oneColSample, twoColSample, threeColSample, actionPanel,
};
