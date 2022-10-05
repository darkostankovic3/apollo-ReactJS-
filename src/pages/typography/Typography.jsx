import React from 'react';
import { Grid } from '@material-ui/core';

// styles
import useStyles from './styles';

// components
import Widget from '../../components/Widget/Widget';
import { Typography } from '../../components/Wrappers/Wrappers';

export default function TypographyPage() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>

        <Grid item xs={12} md={6}>
          <Widget title="Apollo Text" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography variant="h1" className={classes.text}>
                h1 | type-headline-1,
                <br />
                {' '}
                Semibold 40px
              </Typography>
              <br />
              <Typography variant="h2" className={classes.text}>
                h2 | type-headline-2,
                <br />
                {' '}
                Semibold 32px
              </Typography>
              <br />
              <Typography variant="h3" className={classes.text}>
                h3 and body | type-title-1,
                <br />
                {' '}
                Semibold 20px
              </Typography>
              <br />
              <Typography variant="h4" className={classes.text}>
                h4 | type-title-2,
                <br />
                {' '}
                Regular 18px
              </Typography>
              <br />
              <Typography variant="h5" className={classes.text}>
                h5 | type-body-1,
                <br />
                {' '}
                Regular 16px
              </Typography>
              <br />
              <Typography variant="h6">
                h6 | type-body-2,
                <br />
                {' '}
                Regular 14px
              </Typography>
              <br />
              <Typography variant="type_caption">
                type-caption,
                <br />
                {' '}
                Regular 13px
              </Typography>
            </div>
          </Widget>
        </Grid>

        <Grid item xs={12} md={6}>
          <Widget title="Apollo Text Weights" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography variant="h6" style={{ fontWeight: '100' }}>
                font weight 100
              </Typography>
              <br />
              <Typography variant="h6" style={{ fontWeight: '200' }}>
                font weight 200
              </Typography>
              <br />
              <Typography variant="h6" style={{ fontWeight: '300' }}>
                font weight 300
              </Typography>
              <br />
              <Typography variant="h6" style={{ fontWeight: '400' }}>
                font weight 400
              </Typography>
              <br />
              <Typography variant="h6" style={{ fontWeight: '500' }}>
                font weight 500
              </Typography>
              <br />
              <Typography variant="h6" style={{ fontWeight: '600' }}>
                font weight 600
              </Typography>
              <br />
              <Typography variant="h6" style={{ fontWeight: '700' }}>
                font weight 700
              </Typography>
              <br />
              <Typography variant="h6" style={{ fontWeight: '800' }}>
                font weight 800
              </Typography>
              <br />
              <Typography variant="h6" style={{ fontWeight: '900' }}>
                font weight 900
              </Typography>
              <br />

            </div>
          </Widget>
        </Grid>

        <Grid item xs={12} md={6}>
          <Widget title="Basic Text Settings" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography className={classes.text}>Basic text</Typography>
              <Typography className={classes.text} weight="light">
                Basic light text (font-weight: 300)
              </Typography>
              <Typography className={classes.text} weight="medium">
                Basic medium text (font-weight: 500)
              </Typography>
              <Typography className={classes.text} weight="semiBold">
                Basic Semibold text (font-weight: 600)
              </Typography>
              <Typography className={classes.text} weight="bold">
                Basic bold text (font-weight: 700)
              </Typography>
              <Typography className={classes.text}>
                BASIC UPPERCASE TEXT
              </Typography>
              <Typography className={classes.text}>
                basic lowercase text
              </Typography>
              <Typography className={classes.text}>
                Basic Capitalized Text
              </Typography>
              <Typography>
                <i>Basic Cursive Text</i>
              </Typography>
            </div>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

export { useStyles };
