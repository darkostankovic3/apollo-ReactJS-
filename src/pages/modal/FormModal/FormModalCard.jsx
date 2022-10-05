import React, { useState } from 'react';
import {
  Box,
} from '@material-ui/core';

// components
import Widget from '../../../components/Widget/Widget';
import { Typography, Button } from '../../../components/Wrappers/Wrappers';
import Code from '../../../components/Code/Code';
import FormModal from './FormModal';

const FormModalCard = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  return (
    <Widget title="Form dialogs" disableWidgetMenu>
      <Typography block>
        Form dialogs allow users to fill out form fields within a
        dialog. For example, if your site prompts for potential
        subscribers to fill in their email address, they can fill out
        the email field and then click
        {' '}
        <Code row inline>Submit</Code>
      </Typography>
      <Box my={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsFormModalOpen(true)}
        >
          Open form dialog
        </Button>
        <FormModal isOpen={isFormModalOpen} setIsOpen={setIsFormModalOpen} />
      </Box>
    </Widget>
  );
};

export default FormModalCard;
