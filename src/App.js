import React from 'react';
// import { ReactDOM } from 'react';
import Interns from './components/Interns';
import './components/interns.css'
// import './App.css';

function App() {
  return(
   <React.Fragment>
    <h1>
      learnable scoreboard
    </h1>
    <div>
      <Interns/>
    </div>
   </React.Fragment>
  )
}

export default App;
