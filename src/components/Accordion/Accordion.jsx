import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React from 'react';
import { Typography } from '../Wrappers/Wrappers';
import styles from './styles';

const Accordion = ({
  id, title, children, disabled,
}) => {
  const classes = styles();

  return (
    <MuiAccordion
      classes={{
        expanded: classes.panelExpanded,
        root: classes.accordionRoot,
      }}
      disabled={disabled}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        classes={{
          root: classes.panelSummary,
          content: classes.summaryContent,
          expandIcon: classes.iconButton,
          expanded: classes.expandedIconButton,
        }}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.pannelDetails }}>
        {children}
      </AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
