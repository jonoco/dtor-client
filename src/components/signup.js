import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Signup extends Component {
	render() {
		return (
			<div className='container-fluid'>
				<form action="" onSubmit={this.handleSubmit.bind(this)}>
					<label htmlFor="">Username</label>
					<input type="text"/>
					<label htmlFor="">Password</label>
					<input type="text"/>

					<button type='submit' className='btn btn-primary'>Sign up</button>
				</form>

				<Link to='/login'>log in</Link>
			</div>
		);
	}
}