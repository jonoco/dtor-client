import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
      	<Header />
				{this.props.children}
      </div>
    );
  }
}
