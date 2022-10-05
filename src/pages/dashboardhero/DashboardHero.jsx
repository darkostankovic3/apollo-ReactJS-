/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  useTheme,
  Grid,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Widget from '../../components/Widget/Widget';
import Hero from '../../components/Hero/Hero';
import Table from '../tables/components/Table/Table';
import ApexDonutChart from '../charts/components/ApexDonutChart/ApexUpdateDonut';
import ApexLineChart from '../charts/components/ApexLineChart/ApexLineChart';
import ApexStackedChart from '../charts/components/ApexStackedChart/ApexStackedChart';

import { Typography } from '../../components/Wrappers/Wrappers';
import {
  generateRows,
  employeeTaskValues,
} from '../tables/demo-data/generator';

import {
  HeaderSubtitleDisplayOptions,
} from '../tables/demo-data/DemoSelectors/DemoSelectors';

// styles

export default function HeroPage() {
  const theme = useTheme();

  const row5Stacked = {
    series: [{
      name: 'Series 3',
      data: [130, 90, 78, 60, 33],
    }, {
      name: 'Series 4',
      data: [130, 80, 68, 45, 22],
    }, {
      name: 'Series 5',
      data: [30, 70, 50, 22, 22],
    }],
    maxValue: 230,
    hPerc: '50',
    xCategory: [2007, 2008, 2009, 2010, 2011],
  };

  const handleMenuSelect = (value) => {
    console.log('handle it');
    console.log(value);
  };

  const line3full = {
    series: [
      {
        name: 'Signed',
        data: [31, 40, 28, 51, 42],
      },
      {
        name: 'Unsigned',
        data: [11, 32, 45, 32, 34],
      },
      {
        name: 'Overdue',
        data: [12, 3, 9, 1, 9],
      },
    ],
    xCategory: ['Label', 'Label', 'Label', 'Label', 'Label'],
  };

  function renderBasicTable() {
    const originalTitle = 'Apollo Table';
    const originalSubtitle = 'Basic Table Example';

    const [header, setHeader] = useState({
      title: originalTitle,
      subtitle: originalSubtitle,
    });
    const [dropDownSelection, setDropDownSelection] = useState(1);

    function onDropDownSelection(dropDownSelectionValue) {
      if (dropDownSelectionValue === 2) {
        setHeader({ title: originalTitle, subtitle: '' });
      } else {
        setHeader({ title: originalTitle, subtitle: originalSubtitle });
      }
      setDropDownSelection(dropDownSelectionValue);
    }

    return (
      <Table
        title={header.title}
        subtitle={header.subtitle}
        columns={[
          { name: 'priority', title: 'Priority', type: 'string' },
          { name: 'status', title: 'Status', type: 'string' },
          { name: 'subject', title: 'Subject', type: 'string' },
          { name: 'startDate', title: 'Start Date', type: 'date' },
          { name: 'dueDate', title: 'Due Date', type: 'date' },
        ]}
        data={
        generateRows({ columnValues: employeeTaskValues, length: 8 })
      }
        rowsPerPage={10}
      // {/* This attribute is for demo purposes and is not needed for real usage */}
        demoSelector={
        (
          <HeaderSubtitleDisplayOptions
            dropDownSelection={dropDownSelection}
            onDropDownSelection={onDropDownSelection}
          />
)
      }
      />
    );
  }

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Hero
            id={1}
            title="Hello, Neil"
            subTitle="There are a few updates including Aldrin, Buzz moving up in rank"
            menuLabel="Configure Dashboard"
            menuSelectCallback={handleMenuSelect}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} lg={4}>
                <Widget
                  title="Top 5 Highly Rated Astronauts"
                  subtitle="Updated today"
                  bottomAlign

                >
                  <ApexStackedChart config={row5Stacked} gHeight="350" />
                </Widget>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Widget
                  title="Mars 2020 Costs"
                  subtitle="Current Mission"
                  bottomAlign
                >
                  <Box>
                    <ApexLineChart config={line3full} />
                  </Box>
                </Widget>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Widget
                  bottomAlign
                  title="Overall Astronaut Health Rating"
                  subtitle="Post mission"
                >
                  <ApexDonutChart config={{
                    series: [88],
                    color: theme.palette.colorDataViz5.main,
                    label: 'Total number of forms.',
                  }}
                  />
                  <Box alignItems="center" width={1}>
                    <Typography
                      variant="h6"
                      weight="lightMedium"
                      color="colorNeutral8"
                      align="center"
                    >
                      Added something here!
                    </Typography>
                  </Box>
                </Widget>
              </Grid>
            </Grid>
          </Hero>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {renderBasicTable()}
        </Grid>
      </Grid>
    </>
  );
}
