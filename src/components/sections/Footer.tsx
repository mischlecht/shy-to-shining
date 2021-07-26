import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    height: '15rem',
    padding: '1rem',
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.header}>
      <Typography variant="h4" color="secondary">
        Footer
      </Typography>
    </Grid>
  );
};

export default Footer;
