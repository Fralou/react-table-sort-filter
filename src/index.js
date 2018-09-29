import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MusicTable from './components/app.js';

class App extends Component {

  render() {
    return (
      <div className="up">
        <MusicTable />
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.querySelector('.app')
);
