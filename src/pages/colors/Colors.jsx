import React from 'react';
import {
  useTheme,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Grid,
} from '@material-ui/core';

// components
import Widget from '../../components/Widget/Widget';
import Dot from '../../components/General/Dot';
import Code from '../../components/Code/Code';
import { Typography } from '../../components/Wrappers/Wrappers';

export default function ColorsComp() {
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Widget title="Data Visualization Colors" disableWidgetMenu>
            <Typography>
              Color and Order of Data
            </Typography>
            <Table className="mb-0">
              <TableHead>
                <TableRow>
                  <TableCell>Variable Name</TableCell>
                  <TableCell>Preview</TableCell>
                  <TableCell>Usage Example</TableCell>
                  <TableCell>Hex Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Primary</TableCell>
                  <TableCell>
                    <Dot color="primary" size="xxlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{'<Button color="primary">'}</Code>
                  </TableCell>
                  <TableCell>
                    <Code row>{theme.palette.primary.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Secondary</TableCell>
                  <TableCell>
                    <Dot color="secondary" size="xxlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{'<Dot color="secondary">'}</Code>
                  </TableCell>
                  <TableCell>
                    <Code row>{theme.palette.primary.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Warning</TableCell>
                  <TableCell>
                    <Dot color="warning" size="xxlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{'<Typography color="warning">'}</Code>
                  </TableCell>
                  <TableCell>
                    <Code row>{theme.palette.warning.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Success</TableCell>
                  <TableCell>
                    <Dot color="success" size="xxlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{'<Notification color="success">'}</Code>
                  </TableCell>
                  <TableCell>
                    <Code row>{theme.palette.success.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Info</TableCell>
                  <TableCell align="right">
                    <Dot color="info" size="xxlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{'<Icon color="info">'}</Code>
                  </TableCell>
                  <TableCell>
                    <Code row>{theme.palette.info.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Error</TableCell>
                  <TableCell align="right">
                    <Dot color="error" size="xxlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{'<Icon color="error">'}</Code>
                  </TableCell>
                  <TableCell>
                    <Code row>{theme.palette.error.main}</Code>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Widget>
        </Grid>

        <Grid item xs={12} md={12}>
          <Widget title="Apollo Colors for Data Visualization" disableWidgetMenu>
            <Typography>
              These colors should be used in the following order in all charts and graphs
            </Typography>
            <Table className="mb-0">
              <TableHead>
                <TableRow>
                  <TableCell>Variable Name</TableCell>
                  <TableCell>Preview</TableCell>

                  <TableCell>Hex Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>colorDataViz1</TableCell>
                  <TableCell>
                    <Dot color="colorDataViz1" size="xxlarge" />
                  </TableCell>

                  <TableCell>
                    <Code row>{theme.palette.colorDataViz1.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">colorDataViz2</TableCell>
                  <TableCell>
                    <Dot color="colorDataViz2" size="xxlarge" />
                  </TableCell>

                  <TableCell>
                    <Code row>{theme.palette.colorDataViz2.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">colorDataViz3</TableCell>
                  <TableCell>
                    <Dot color="colorDataViz3" size="xxlarge" />
                  </TableCell>

                  <TableCell>
                    <Code row>{theme.palette.colorDataViz3.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">colorDataViz4</TableCell>
                  <TableCell>
                    <Dot color="colorDataViz4" size="xxlarge" />
                  </TableCell>

                  <TableCell>
                    <Code row>{theme.palette.colorDataViz4.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">colorDataViz5</TableCell>
                  <TableCell align="right">
                    <Dot color="colorDataViz5" size="xxlarge" />
                  </TableCell>

                  <TableCell>
                    <Code row>{theme.palette.colorDataViz5.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">colorDataViz6</TableCell>
                  <TableCell align="right">
                    <Dot color="colorDataViz6" size="xxlarge" />
                  </TableCell>

                  <TableCell>
                    <Code row>{theme.palette.colorDataViz6.main}</Code>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Widget>
        </Grid>

        <Grid item xs={12} md={12}>
          <Widget title="Extra Blue Colors and Gradients" disableWidgetMenu>

            <Table className="mb-0">
              <TableHead>
                <TableRow>
                  <TableCell>Variable Name</TableCell>
                  <TableCell>Preview</TableCell>
                  <TableCell>Hex Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow>
                  <TableCell>Color Very Light Blue (Form Element Hightlight Color) </TableCell>
                  <TableCell>
                    <Dot color="colorVeryLightBlue" size="xxlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{theme.palette.colorVeryLightBlue.main}</Code>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Color Dark Purple </TableCell>
                  <TableCell>
                    <Dot color="colorDarkPurple" size="xxlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{theme.palette.colorDarkPurple.main}</Code>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Color Dark Mid Purple </TableCell>
                  <TableCell>
                    <Dot color="colorDarkmidPurple" size="xxlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{theme.palette.colorDarkmidPurple.main}</Code>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Color Light Purple </TableCell>
                  <TableCell>
                    <Dot color="colorLightPurple" size="xxlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{theme.palette.colorLightPurple.main}</Code>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Color Theme Neptune Primary </TableCell>
                  <TableCell>
                    <Dot color="colorThemeNeptunePrimary" size="xxlarge" />
                  </TableCell>
                  <TableCell>
                    <Code row>{theme.palette.colorThemeNeptunePrimary.main}</Code>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Color Blue Purple Gradient</TableCell>
                  <TableCell>
                    <div style={{ background: theme.palette.gradient.main, height: '50px', width: '400px' }} />
                  </TableCell>
                  <TableCell>
                    <Code row>{theme.palette.gradient.main}</Code>
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </Widget>
        </Grid>

        <Grid item xs={12} md={12}>
          <Widget title="White, Black and Greys or Neutral Colors" disableWidgetMenu>
            <Typography>
              These colors should be used in the following order in all charts and graphs
            </Typography>
            <Table className="mb-0">
              <TableHead>
                <TableRow>
                  <TableCell>Variable Name</TableCell>
                  <TableCell>Preview</TableCell>

                  <TableCell>Hex Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>colorNeutral1</TableCell>
                  <TableCell>
                    <Dot color="colorNeutral1" size="xxlarge" />
                  </TableCell>

                  <TableCell>
                    <Code row>{theme.palette.colorNeutral1.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">colorNeutral2</TableCell>
                  <TableCell>
                    <Dot color="colorNeutral2" size="xxlarge" />
                  </TableCell>

                  <TableCell>
                    <Code row>{theme.palette.colorNeutral2.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">colorNeutral3</TableCell>
                  <TableCell>
                    <Dot color="colorNeutral3" size="xxlarge" />
                  </TableCell>

                  <TableCell>
                    <Code row>{theme.palette.colorNeutral3.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">colorNeutral4</TableCell>
                  <TableCell>
                    <Dot color="colorNeutral4" size="xxlarge" />
                  </TableCell>

                  <TableCell>
                    <Code row>{theme.palette.colorNeutral4.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">colorNeutral5</TableCell>
                  <TableCell align="right">
                    <Dot color="colorNeutral5" size="xxlarge" />
                  </TableCell>

                  <TableCell>
                    <Code row>{theme.palette.colorNeutral5.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">colorNeutral6</TableCell>
                  <TableCell align="right">
                    <Dot color="colorNeutral6" size="xxlarge" />
                  </TableCell>

                  <TableCell>
                    <Code row>{theme.palette.colorNeutral6.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">colorNeutral7</TableCell>
                  <TableCell align="right">
                    <Dot color="colorNeutral7" size="xxlarge" />
                  </TableCell>

                  <TableCell>
                    <Code row>{theme.palette.colorNeutral7.main}</Code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">colorNeutral8</TableCell>
                  <TableCell align="right">
                    <Dot color="colorNeutral8" size="xxlarge" />
                  </TableCell>

                  <TableCell>
                    <Code row>{theme.palette.colorNeutral8.main}</Code>
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
