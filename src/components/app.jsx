import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';

const style = {
	backgroundImage: 'url(../../assets/bkg-7.jpg)',
	backgroundPosition: 'top center',
	backgroundSize: 'cover',
	height: '100vh'
};

export default class App extends Component {
  render() {
    return (
      <div style={style}>
      	<Header />
				{this.props.children}
      </div>
    );
  }
}
