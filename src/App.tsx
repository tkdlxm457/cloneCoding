import './App.css';
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Header from './Layout/Header';
import Body from './Layout/Body/Body';


function App() {

  return (
    <div className="App">
      <div>
      < Header></Header>
      </div>
      {/* <div style={{padding: "25px"}}>
        <Body></Body>
      </div> */}
    </div >
  );
}

export default App;
