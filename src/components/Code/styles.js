import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  codeContainer: {
    display: (props) => (props.inline ? 'inline-block' : 'flex'),
    flexDirection: (props) => (props.row ? 'row' : 'column'),
  },
  codeComponent: {
    flexGrow: (props) => (props.row ? 0 : 1),
  },
}));
