import React, { Component } from 'react';

import './App.css';


import {ButtonAppBar} from './component/ButtonAppBar'
import {ComplexGrid} from './component/ComplexGrid'

class App extends Component {
  render() {
    return (
      <div>
      <ButtonAppBar/>
      <ComplexGrid/>
      </div>
    )

  }
}

export default App;
