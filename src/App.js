import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import ContentContainer from './components/content/ContentContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContentContainer />
      </div>
    );
  }
}

export default App;
