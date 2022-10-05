import React from 'react';
import {
  Link,
} from '@material-ui/core';

// components
import Widget from '../../../components/Widget/Widget';
import ListChart from '../../../components/ListChart/ListChart';
import { Typography } from '../../../components/Wrappers/Wrappers';

// data and styles
import { oneColSample } from './data';
import styles from './styles';
import CodeDropdown from './CodeDropdown';

const data = `
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
`;

const element = '<ListChart rows={oneColSample} />';

const OneCol = () => {
  const classes = styles();

  return (
    <Widget
      title="One Column Example"
      disableWidgetMenu
      className={classes.widget}
    >
      <div className={classes.content}>
        <Typography variant="h4" className={classes.headerText}>
          Small tables are used to tabular data in a more bite-sized manner as opposed to
          {' '}
          <Link href="#/app/tables">full tables</Link>
          .
        </Typography>
        <Typography className={classes.bodyText}>
          Small tables can be formatted using flexbox (
          <Link href="https://material-ui.com/components/grid/">Material UI Grid</Link>
          ) regardless of the number of columns. Columns fulfill two purposes. The first is
          allowing for column names, and the second is to split the table into columns for
          content segmentation.
        </Typography>
        <ListChart rows={oneColSample} />
      </div>
      <CodeDropdown data={data} element={element} />
    </Widget>
  );
};

export default OneCol;
