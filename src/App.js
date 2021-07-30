import React from 'react';
// import Header from './componants/header';
// import Content from './componants/content';
import Headers from './componants/headers';
import Appbar from './componants/header2';
import Body from './componants/body';
import Shop from './componants/shop';
import Mi from './componants/minn'
import {BrowserRouter as Router , Route  } from 'react-router-dom';

function App(props) {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/"><Body /></Route>
        <Route exact path="/shops"><Shop /></Route>
      
      <Headers />
      <Appbar />
      
      </Router>
      {/* <Mi /> */}
    </React.Fragment>
  );
}

export default App;
