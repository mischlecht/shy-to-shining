import { Grid, makeStyles } from '@material-ui/core';
import Footer from '../components/sections/Footer';
import Header from '../components/sections/Header';
import HowWeWork from '../components/sections/HowWeWork';
import Welcome from '../components/sections/Welcome';

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    backgroundColor: theme.palette.primary.main,
    height: '20rem',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} direction="column">
      <Header />
      <Welcome />
      <HowWeWork />
      <Footer />
    </Grid>
  );
};

export default Home;
