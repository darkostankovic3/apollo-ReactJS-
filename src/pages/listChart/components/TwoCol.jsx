import React from 'react';

// components
import Widget from '../../../components/Widget/Widget';
import ListChart from '../../../components/ListChart/ListChart';
import { Typography } from '../../../components/Wrappers/Wrappers';

// data and styles
import { twoColSample } from './data';
import styles from './styles';
import CodeDropdown from './CodeDropdown';

const data = `
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
`;

const element = '<ListChart rows={twoColSample} />';

const TwoCol = () => {
  const classes = styles();

  return (
    <Widget
      title="Two Column Example"
      disableWidgetMenu
      className={classes.widget}
    >
      <div className={classes.content}>
        <Typography variant="h4" className={classes.headerText}>
          {`
        Note that the names for the keys in the row objects don't matter, and
        will either be replaced automatically or will be filled by column names
        you provide to the \`ListChart\` element. See the last example
        for customized column names.
        `}
        </Typography>
        <ListChart rows={twoColSample} />
      </div>
      <CodeDropdown data={data} element={element} />
    </Widget>
  );
};

export default TwoCol;
