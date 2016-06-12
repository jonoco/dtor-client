import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

class Home extends Component {
	render() {
		return (
			<div className='container'>
				<div className='jumbotron'>
					<h1 className='display-3'>dTor</h1>
					<p className='lead'>Torrent detouring service</p>
					<hr className="m-y-2" />
					<div className='row'>
						<Link to="/signup" className='btn btn-primary'>Sign up</Link>
						<Link to="/login" className='btn btn-secondary'>Log in</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null)(Home);