import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  avatarChipIcon: {
    marginLeft: '0px !important',
    height: 'inherit !important',
    width: '32px !important',
  },
  chip: {
    margin: '2px',
    fontSize: '16px !important',
    backgroundColor: theme.palette.colorNeutral2.main,
    border: theme.palette.colorNeutral3.main,
    borderWidth: '1px !important',
    fontWeight: 500,
    padding: '4px 0px 4px 0px',
    color: theme.palette.colorBlack.main,
    borderStyle: 'solid !important',
  },
}));
