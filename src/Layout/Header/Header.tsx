import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import User from '../../view/pages/User/main/User';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // root: {
    //   flexGrow: 1,
    // },
    paper: {
      textAlign: 'center',
      justifyContent: 'center',
      color: theme.palette.text.secondary,
      padding: '15px 72.5px 0px 72.5px'
    },
  }),
);

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState('/List');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div>

      <Paper variant="outlined" className={classes.paper}>
        <Grid container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          alignContent="stretch"
          >

          <Grid item xs={3} style={{textAlign: 'start'}}>
            {/* <Paper className={classes.paper}>김대현page</Paper> */}
            <img alt="Remy Sharp" src="https://rel.foreket.ai/assets/images/foreket_logo.svg" />
          </Grid>
          <Grid item xs={6}>

          </Grid>
          <Grid item xs={3}>
            사용자정보
          </Grid>
        </Grid>



          <Grid item xs={3}>
            <Box >
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
            </Box>
        </Grid>

        <Grid item xs={6}></Grid>
        <Grid item xs={3}></Grid>
      </Paper>
    </div >
  );
}