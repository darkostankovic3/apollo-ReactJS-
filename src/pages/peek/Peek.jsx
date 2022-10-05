import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Widget from '../../components/Widget/Widget';
import Peek from '../../components/Peek/Peek';
import PeekContent from '../../components/Peek/PeekContent';
import { Button, Typography } from '../../components/Wrappers/Wrappers';
import SimpleVerticalCard from '../../components/SimpleVerticalCard/SimpleVerticalCard';
import Table from '../tables/components/Table/Table';
import ExtraLink from '../../utils/ExtraLink';

export default function PeekPage() {
  const [placement, setPlacement] = useState('bottom');

  const changePeekPlacement = (event) => {
    setPlacement(event.currentTarget.value);
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Widget title="Peek on Card" disableWidgetMenu>
            <Grid container spacing={4} justify="center">
              <Grid item xs={12} md={6}>
                <Peek
                  title={(
                    <PeekContent title="Peek title">
                      <Typography variant="h6">
                        Nulla ac nisi id mauris iaculis dignissim et hendrerit erat.
                        Fusce ac eleifend eros. Proin molestie imperdiet quam,
                        tincidunt consectetur mi euismod in. Quisque erat turpis,
                        efficitur vel fermentum et, ullamcorper id sapien.
                        Proin molestie imperdiet quam,tincidunt consectetur mi euism.
                      </Typography>
                    </PeekContent>
                    )}
                  placement={placement}
                >
                  <Box>
                    <SimpleVerticalCard
                      title="Card Title"
                      dueDate={new Date()}
                      saveDate={new Date()}
                      startDate={new Date()}
                      endDate={new Date()}
                      country="United States"
                      hasStar={false}
                    />
                  </Box>
                </Peek>
              </Grid>
            </Grid>
            <Grid container spacing={4} justify="center">
              <Grid item xs={12} lg={6}>
                <Box mt={2}>
                  <span><strong>Peek Placement: </strong></span>
                  {['bottom', 'top', 'left', 'right'].map((item) => (
                    <Button
                      key={item}
                      color="secondary"
                      size="small"
                      value={item}
                      onClick={changePeekPlacement}
                      style={{
                        textDecoration: placement === item ? 'underline' : '',
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <Table
            title="Peek on Table"
            subtitle="Demo of peek component on table"
            rowsPerPage={10}
            columns={[
              { name: 'column_1', title: 'Column 1', type: 'function' },
              { name: 'column_2', title: 'Column 2', type: 'function' },
              { name: 'column_3', title: 'Column 3', type: 'function' },
            ]}
            data={[
              {
                column_1:
                  (
                    <Peek
                      title={(
                        <PeekContent title="Column 1, Row 1">
                          <Typography variant="h6">
                            Nulla ac nisi id mauris iaculis dignissim et hendrerit erat.
                            Fusce ac eleifend eros. Proin molestie imperdiet quam,
                            tincidunt consectetur mi euismod in.
                          </Typography>
                        </PeekContent>
                  )}
                      placement="top"
                    >
                      <Box>
                        <Typography variant="h6">peek: placement top</Typography>
                      </Box>
                    </Peek>
                  ),
                column_2: (
                  <Peek
                    title={(
                      <PeekContent title="Column 2, Row 1">
                        <Typography variant="h6">
                          Nulla ac nisi id mauris iaculis dignissim et hendrerit erat.
                          Fusce ac eleifend eros. Proin molestie imperdiet quam,
                          tincidunt consectetur mi euismod in.
                        </Typography>
                      </PeekContent>
                    )}
                    placement="top"
                  >
                    <Box>
                      <Typography variant="h6">peek: placement top</Typography>
                    </Box>
                  </Peek>
                ),
                column_3: (
                  <Peek
                    title={(
                      <PeekContent title="Column 3, Row 1">
                        <Typography variant="h6">
                          Nulla ac nisi id mauris iaculis dignissim et hendrerit erat.
                          Fusce ac eleifend eros. Proin molestie imperdiet quam,
                          tincidunt consectetur mi euismod in.
                        </Typography>
                      </PeekContent>
                    )}
                    placement="bottom"
                  >
                    <Box>
                      <Typography variant="h6">peek: placement bottom</Typography>
                    </Box>
                  </Peek>
                ),
              },
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Tooltip Material UI Component"
            link="https://material-ui.com/components/tooltips/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </>
  );
}
