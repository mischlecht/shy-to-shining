import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appLayout: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    margin: 0,
  },
  content: {
    marginRight: '1rem',
    marginLeft: '1rem',
  },
}));

interface AppLayoutProps {
  children: JSX.Element;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.appLayout}>
      <Box className={classes.content}>{children}</Box>
    </Box>
  );
};

export default AppLayout;
