import React, { Component } from 'react';

import './App.css';


import {ButtonAppBar} from './component/ButtonAppBar'
import {ComplexGrid} from './component/ComplexGrid'
import FetchData from './component/FetchData'

class App extends Component {
  render() {
    return (
      <div>
      <ButtonAppBar/>
      <ComplexGrid/>
      <FetchData/>
      </div>
    )

  }
}

export default App;
