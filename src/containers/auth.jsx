import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Auth extends Component {
	componentWillMount() {
		const { code } = this.props.location.query;
		this.props.authorize(this.props.token, code);
	}

	render() {
		return (
			<div>Authorizing...</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		token: state.auth.token
	}
}

export default connect(mapStateToProps, actions)(Auth);