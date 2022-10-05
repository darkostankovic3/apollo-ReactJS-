import React from 'react';

import {
  Grid,
  Box,
} from '@material-ui/core';
import useStyles from './styles';

// components
import Widget from '../../components/Widget/Widget';
import ModalDialogInfo from '../../components/ModalDialog/ModalDialog';
import { Typography, Button } from '../../components/Wrappers/Wrappers';
import ExtraLink from '../../utils/ExtraLink';

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL_INFO':
      return {
        ...state,
        toggleModalInfo: true,
        ...action.payload,
      };
    case 'CLOSE_MODAL_INFO':
      return {
        ...state,
        toggleModalInfo: false,
      };
    default:
      return null;
  }
};

export default function ModalInfo() {
  const classes = useStyles();
  const [state, dispatch] = React.useReducer(reducer, {
    modalVariant: '',
    toggleModalInfo: false,
    toggleModal: false,
    modalType: 'success',
    modalTitle: 'Modal Info',
    modalContent: 'This is an information modal.',

  });

  return (
    <div>
      <ModalDialogInfo
        variant={state.modalType}
        open={state.toggleModalInfo}
        modalVariant={state.modalType}
        modalTitle={state.modalTitle}
        onClickCancel={() => dispatch({ type: 'CLOSE_MODAL_INFO' })}
        onClickOK={() => dispatch({ type: 'CLOSE_MODAL_INFO' })}
      >
        {state.modalContent}
      </ModalDialogInfo>

      <Grid container spacing={6} alignItems="flex-start">
        <Grid container item md={6} xs={12}>
          <Box display="flex" flexDirection="column" width="100%">
            <Box mb={6}>
              <Widget title="Info Modal" disableWidgetMenu>
                <Typography>
                  This is the simple info demo that is used to supply info.
                </Typography>
                <Box my={6}>
                  <Typography>Information Based Modal</Typography>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.marginRight}
                    onClick={() => dispatch({
                      type: 'OPEN_MODAL_INFO',
                      payload: {
                        modalType: '',
                        modalTitle: 'Modal Info',
                        modalContent: 'This is an information modal.',
                      },
                    })}
                  >
                    Info / Message Modal
                  </Button>
                </Box>
                <Box my={6}>
                  <Typography>Modal for Success</Typography>
                  <Button
                    color="success"
                    variant="contained"
                    className={classes.marginRight}
                    onClick={() => dispatch({
                      type: 'OPEN_MODAL_INFO',
                      payload: {
                        modalType: 'success',
                        modalTitle: 'Modal Success',
                        modalContent: 'This is a success modal with information.',
                      },
                    })}
                  >
                    Success Modal
                  </Button>
                </Box>
                <Box my={6}>
                  <Typography>Modal for Warning</Typography>
                  <Button
                    color="warning"
                    variant="contained"
                    className={classes.marginRight}
                    onClick={() => dispatch({
                      type: 'OPEN_MODAL_INFO',
                      payload: {
                        modalType: 'warning',
                        modalTitle: 'Modal Warning',
                        modalContent: 'This is a warning modal with information.',
                      },
                    })}
                  >
                    Warning Modal
                  </Button>
                </Box>
                <Box my={6}>
                  <Typography>Modal for Error</Typography>
                  <Button
                    color="error"
                    variant="contained"
                    className={classes.marginRight}
                    onClick={() => dispatch({
                      type: 'OPEN_MODAL_INFO',
                      payload: {
                        modalType: 'error',
                        modalTitle: 'Modal Error',
                        modalContent: 'This is an error modal with information.',
                      },
                    })}
                  >
                    Error Modal
                  </Button>
                </Box>
              </Widget>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <ExtraLink
            title="Design Link"
            subtitle="This component uses the Modal Material UI Component"
            link="https://material-ui.com/components/modal/"
            text="Link to Material Docs"
          />
        </Grid>
      </Grid>
    </div>
  );
}
