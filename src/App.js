import React, { Component } from 'react';

import './App.css';


import {ButtonAppBar} from './component/ButtonAppBar'
// import {MediaCard} from './component/MediaCard'
import {ComplexGrid} from './component/ComplexGrid'
import {SpacingGrid} from './component/SpacingGrid'

class App extends Component {
  render() {
    return (
      <div>
      <ButtonAppBar/>
      <ComplexGrid/>
      <SpacingGrid/>
      </div>
    )

  }
}

export default App;
