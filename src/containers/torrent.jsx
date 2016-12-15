import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
import io from 'socket.io-client';
import _ from 'lodash';

import Alert from '../components/alert';
import TorrentInfo from '../components/torrent-info';

class Torrent extends Component {
	componentWillMount() {
		this.createSocket();
	}

	componentWillUnmount() {
		this.closeSocket();
	}

	closeSocket() {
		this.socket.close();
	}

	createSocket() {
		this.socket = io('https://dtor-api.herokuapp.com');
		this.socket.emit('user', this.props.username);
		
		this.socket.on('torrent', torrent => {
			this.props.updateTorrent(torrent);
		});

		this.socket.on('message', msg => {
			// for socket debugging
			console.log(msg);
		});
	}

	handleDriveAuth() {
		this.props.authenticateDrive(this.props.token);
	}

	handleSubmit({ torrent }) {
		this.props.submitTorrent(this.props.token, torrent);
		this.props.resetForm();
	}

	handleRemove(e) {
		const id = e.currentTarget.dataset.id;
		console.log(e.currentTarget.dataset.id);
		this.props.removeTorrent(id);
	}

	renderAuthButton() {
		return (this.props.drive) ? 
				<button 
					className="btn btn-success" 
					onClick={this.handleDriveAuth.bind(this)}>
					Drive Authenticated
				</button>
			:
				<button 
					className="btn btn-default" 
					onClick={this.handleDriveAuth.bind(this)}>
					Authenticate Drive
				</button>
			;
	}

	renderTorrentInfo() {
		const { torrents } = this.props;

		return _.map(torrents, torrent => {
			return (
				<li className='list-group-item' key={torrent.infoHash}>
					<TorrentInfo click={this.handleRemove.bind(this)} torrent={torrent}/>
				</li>
			);
		});
	}

	render() {
		const { drive, torrentState, handleSubmit, fields: { torrent }} = this.props;

		return (
			<div className="torrent">
				<div className="row">
					<div className="col-md-3">
						{this.renderAuthButton()}
					</div>

					<div className="col-md-9">
						<form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
							<div className="input-group">
								<input {...torrent} className='form-control' type="text" placeholder='copy torrent link here'/>
								<span className="input-group-btn">
									<button type="submit" className={`btn btn-primary ${!torrent.value && 'disabled'}`}>Submit</button>		

								</span>
							</div>
						</form>
					</div>
				</div>

				{torrent.touched && torrent.error && <Alert type='danger' message={torrent.error} />}
				{!drive && <Alert type='warning' message='You must authenticate your Drive account to transfer torrents to it' dismissible={true} />}
				
				{torrentState.error && <Alert type='danger' message={torrentState.error} dismissible={true} />}

				<br />
				<ul className="list-group">
					{this.renderTorrentInfo()}
				</ul>
				
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { 
		token: state.auth.token,
		drive: state.auth.driveAuth,
		username: state.auth.username,
		torrents: state.torrents,
		torrentState: state.torrentState 
	};
}

export default reduxForm({
	form: 'torrent',
	fields: ['torrent']
}, mapStateToProps, actions)(Torrent);