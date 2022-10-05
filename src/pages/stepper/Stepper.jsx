import React from 'react';
import {
  Grid, Box,
  Stepper, Step, StepLabel,
  makeStyles, withStyles, useTheme,
} from '@material-ui/core';

import clsx from 'clsx';

import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import useStyles from './styles';

// components
import Widget from '../../components/Widget/Widget';
import {
  Typography, Button,
} from '../../components/Wrappers/Wrappers';
import ExtraLink from '../../utils/ExtraLink';

const getSteps = () => ['Step 1', 'Step 2', 'Step 3'];

const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return 'Step 1 Content';
    case 1:
      return 'Step 2 Content';
    case 2:
      return 'Step 3 Content';
    default:
      return 'Unknown stepIndex';
  }
};

const ApolloStepConnector = withStyles((theme) => ({
  active: {
    '& $line': {
      backgroundColor: theme.palette.colorDataViz5.main,
    },
  },
  completed: {
    '& $line': {
      backgroundColor: theme.palette.colorDataViz5.main,
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.colorNeutral5.main,
    borderRadius: 1,
  },
}))(StepConnector);

const apolloStepIconStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.colorNeutral5.main,
    zIndex: 1,
    color: '#fff',
    width: 24,
    height: 24,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
  },
  completed: {
    color: theme.palette.colorDataViz5.main,
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },
  active: {
    backgroundColor: theme.palette.colorDataViz5.main,
    fontWeight: '600',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: '50%',
    color: '#fff',
    textAlign: 'center',
  },
  small: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
}));

const ApolloStepIcon = (props) => {
  const classes = apolloStepIconStyles();
  const { active, completed, icon } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed
        ? <Check className={classes.completed} />
        : (
          <>{icon}</>
        ) }
    </div>
  );
};

export default function BadgeComp() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Grid container spacing={6}>
        <Grid item md={6} xs={12}>
          <Widget title="Stepper Example" disableWidgetMenu>
            <Box>
              <Stepper activeStep={activeStep} connector={<ApolloStepConnector />} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={ApolloStepIcon}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>All steps completed</Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
                  <div>
                    <Box
                      display="flex"
                      justifyContent="center"
                      mt={14}
                      mb={14}
                      pt={14}
                      pb={14}
                      style={{
                        width: '100%',
                        color: theme.palette.common.white,
                        backgroundColor: theme.palette.colorDataViz6.main,
                      }}
                    >
                      <Typography className={classes.instructions} variant="h3">
                        {getStepContent(activeStep)}
                      </Typography>
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                      <Box mr={2}>
                        <Button
                          color="secondary"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                        >
                          Back
                        </Button>
                      </Box>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={handleNext}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </Box>
                  </div>
                )}
              </div>
            </Box>
          </Widget>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Stepper Material UI Component"
            link="https://material-ui.com/components/steppers/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </>
  );
}
