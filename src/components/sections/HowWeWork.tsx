import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  howWeWork: {
    height: '20rem',
    padding: '1rem',
    backgroundColor: theme.palette.primary.light,
  },
}));

const HowWeWork = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.howWeWork}>
      <Typography variant="h4">How We Work</Typography>
    </Grid>
  );
};

export default HowWeWork;
