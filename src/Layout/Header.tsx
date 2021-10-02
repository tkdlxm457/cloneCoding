import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Body from './Body/Body';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState('/Home');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>

      <Paper variant="outlined" >
        <Grid container>
          <Grid item xs={3}>
            {/* <Paper className={classes.paper}>김대현page</Paper> */}
            <img alt="Remy Sharp" src="https://rel.foreket.ai/assets/images/foreket_logo.svg" />
          </Grid>
          <Grid item xs={6}>

          </Grid>
          <Grid item xs={3}>
            사용자정보
          </Grid>
        </Grid>

        <Grid
          container
        // direction="row"
        // justifyContent="flex-start"
        // alignItems="flex-start"
        >
          <BrowserRouter>

            <Grid style={{ textAlign: "left" }} xs={12}>
              <Box sx={{ width: '100%' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                >
                  <Tab value="/Home"
                    component={Link}
                    to="/Home" label="홈" />
                  <Tab value="/List"
                    component={Link}
                    to="/List" label="리스트" />
                </Tabs>

                <Switch>
                  <Route exact path="/">
                    {/* <Body></Body> */}
                  </Route>
                  <Route path="/List" component={Body}></Route>
                </Switch>
              </Box>
            </Grid>

          </BrowserRouter>
        </Grid>
      </Paper>
    </div >
  );
}