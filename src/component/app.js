import React, {Component} from 'react';

import NavBar from './nav_bar';
import FlashMessage from '../container/flash_message';

class App extends Component {
  render(){
    return (
      <div>
        <NavBar />
        <div className="container">
        <FlashMessage />
        {this.props.children}
        </div>
      </div>
    );
  }
};

export default App;