import React from 'react';
import { Grid, Typography } from '@material-ui/core';

// components
import Widget from '../../components/Widget/Widget';
import Code from '../../components/Code/Code';
import ExtraLink from '../../utils/ExtraLink';
import useStyles from './styles';

export default function WidgetComp() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Widget
            title="Simple Widget"
            disableWidgetMenu
          >
            <Code>
              {`
  <Widget title="Simple Widget" disableWidgetMenu>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
    rem?
  </Widget>
`}
            </Code>
          </Widget>
        </Grid>

        <Grid item md={6} sm={6} xs={12}>
          <Widget
            title="Widget With Menu and Subtitle"
            subtitle="Support Tracker Stats"
          >
            This is a widget with a Subtitle and a Dropdown Menu!
            <Code>
              {`
  <Widget
    title="Widget With Menu and Subtitle"
    subtitle="Support Tracker Stats"
    bodyClass={classes.fullHeightBody}
    className={classes.card}
  >
    This is a widget with a Subtitle and a Dropdown Menu!
  </Widget>
`}
            </Code>
          </Widget>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Widget
            title="Specialized Widget for Apollo Tables"
            subtitle="Padding removed around the lower section, padding added to the header"
            variant="table"
            noBodyPadding
          >
            <Code>
              {`

  <Widget
    title="Specialized Widget for Apollo Tables"
    subtitle="Padding removed around the lower section, padding added to the header"
    bodyClass={classes.fullHeightBody}
    className={classes.card}
    variant="table"
    noBodyPadding
    >
    Padding removed around the lower section, padding\n added to the header. Place the table here.
  </Widget>
`}
            </Code>
          </Widget>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Widget
            title="Specialized Widget for Apex Charts"
            subtitle="Tighter 16px Padding"
            variant="tinychart"
            noBodyPadding
          >
            <Code>
              {`
  <Widget
      title="Specialized Widget for Apex Charts"
          subtitle="Tighter 16px Padding"
          variant="apexchart"
          noBodyPadding
    >
    Padding removed around the lower section, padding added to the header. Place the table here.
  </Widget>
`}
            </Code>
          </Widget>
        </Grid>
        <Grid item lg={12} sm={12} xs={12} style={{ paddingTop: '40px' }}>
          <Widget
            title="This is an example of the empty widget"
          >
            <Typography variant="type-caption">
              A widget can simply be set to empty. This is used in the Hero Widget.
            </Typography>
          </Widget>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Widget
            variant="empty"
            noBodyPadding
          >
            <Code>
              {`
           <Widget
            variant="empty"
            noBodyPadding
           >
            This is an example of a variant="empty" widget. 
             It is used if you need to remove everything but use the Widget to
             encapsulate something else. This is the widget that is used to create the blue background modals.
            </Widget>
          `}
            </Code>
          </Widget>
        </Grid>
      </Grid>

      <Grid container spacing={6} style={{ paddingTop: '40px' }}>

        <Grid item xs={12} className={classes.minHeight}>
          <Widget
            title="Align Content on Bottom"
            subtitle="Using bottomAlign"
            bottomAlign
            disableWidgetMenu
          >
            <div style={{ backgroundColor: '#20014D', color: '#fff' }}> This Content is Bottom Aligned using bottomAlign attribute</div>
          </Widget>
        </Grid>

        <Grid item xs={12} style={{ paddingTop: '40px' }}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Card Material UI Component"
            link="https://material-ui.com/components/cards/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </>
  );
}
