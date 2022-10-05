import React from 'react';

// components
import Widget from '../../../components/Widget/Widget';
import ListChart from '../../../components/ListChart/ListChart';

// data and styles
import { threeColSample, actionPanel } from './data';
import styles from './styles';
import CodeDropdown from './CodeDropdown';

const data = `
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
      <Grid container alignItems="center" justify="flex-end">
        <Dot color="success" size="xxsmall" style={{ marginRight: '8px' }} />
        <DueDate dueDate="5 days since the end date" />
      </Grid>
    ),
    col3: <DueDate dueDate="01/02/2019" />,
  },
];
`;

const element = `
<ListChart rows={threeColSample} />
<ListChart rows={actionPanel} columnNames={['Name', 'Status', 'End Date']} />
`;

const TwoCol = () => {
  const classes = styles();

  return (
    <Widget
      title="Three Column Examples"
      disableWidgetMenu
      className={classes.widget}
    >
      <div className={classes.content}>
        <ListChart rows={threeColSample} />
        <ListChart rows={actionPanel} columnNames={['Name', 'Status', 'End Date']} className={classes.secondChart} />
      </div>
      <CodeDropdown data={data} element={element} />
    </Widget>
  );
};

export default TwoCol;
