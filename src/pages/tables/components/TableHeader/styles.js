import { makeStyles } from '@material-ui/styles';
// TODO import variable names

export default makeStyles((theme) => ({
  tableHeader: {
    borderBottom: 'none',
  },
  title: {
    lineHeight: '1.5',
    color: 'black',
    fontWeight: '600',
    paddingLeft: theme.spacing(1),
  },
  subtitle: {
    color: '#595959',
    lineHeight: '1.71',
    paddingLeft: theme.spacing(1),
  },
}));
