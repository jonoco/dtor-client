import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';

class Signup extends Component {
	constructor(props) {
		super(props);

		this.state = {
			submitted: false
		};
	}

	handleFormSubmit(formProps) {
		this.props.login(formProps);
		this.setState({ submitted: true });
	}

	renderAlert() {
		const { submitted } = this.state;
		const { authError } = this.props;

		if (authError && submitted) {
			return (
				<div className="alert alert-danger">
					<strong>Oops</strong> wrong username or password
				</div>
			);
		}
	}

	render() {
		const { handleSubmit, fields: { username, password }} = this.props;

		return (
			<div className="container">
				<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
					<fieldset className="form-group">
						<label>username</label>
						<input type="text" className="form-control" {...username} />
						{username.touched && username.error && <div className='text-danger'>{username.error}</div>}
					</fieldset>
					<fieldset className="form-group">
						<label>password</label>
						<input type="password" className="form-control" {...password} />
						{password.touched && password.error && <div className='text-danger'>{password.error}</div>}
					</fieldset>
					
					{this.renderAlert()}
					<button type='submit' className="btn btn-primary">Log in</button>
					<Link to='signup' className="btn btn-link">or sign up</Link>
				</form>
			</div>
		);
	}
}

function validate(formProps) {
	const errors = {};

	if (!formProps.username ) errors.username = 'Please enter an username';
	if (!formProps.password) errors.password = 'Please enter a password';

	return errors;
}

function mapStateToProps(state) {
	return { authError: state.auth.error };
}

export default reduxForm({
	form: 'signup',
	fields: ['username', 'password'],
	validate
}, mapStateToProps, actions)(Signup);