import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
	renderLinks() {
		const { username } = this.props;
		if (username) {
			return [
				<li className="nav-item" key={1}>
					<Link to='torrent' className='nav-link'>Torrents</Link>
				</li>,
				<li className="nav-item" key={2}>
					<Link to='signout' className='nav-link'>Sign out</Link>
				</li>,
				<li className="nav-item pull-xs-right" key={3}>
					<span className='nav-link'>{username}</span>
				</li>
			];	
		} else {
			return [
				<li className="nav-item" key={1}>
					<Link to='signup' className='nav-link'>Sign up</Link>
				</li>,
				<li className="nav-item" key={2}>
					<Link to='login' className='nav-link'>Log in</Link>
				</li>
			];
		}
		
	}

	render() {
		return(
			<nav className="navbar navbar-light">
				<Link to="/" className="navbar-brand">dTor</Link>
				<ul className="nav navbar-nav">
					{this.renderLinks()}
				</ul>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { 
		username: state.auth.username
	};
}

export default connect(mapStateToProps, actions)(Header);