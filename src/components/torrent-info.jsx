import React, { Component } from 'react';
import { API_URL } from '../services/api';

class TorrentInfo extends Component {
	render() {
		const { click, torrent } = this.props;
		const downloaded = (torrent.progress == 1);

		return (
			<div className='torrent-info'>
				<h6>{torrent.name}</h6>
				<progress className="progress" value={torrent.progress} max='1'></progress>
				{downloaded ? <span className="text-info pull-xs-right">download complete</span> : <span className="text-muted pull-xs-right">not downloaded</span>}
				{torrent.uploaded ? <span className="text-success pull-xs-right">uploaded to drive</span> : <span className="text-muted pull-xs-right">not uploaded</span>}
				
				{torrent.error && <p className="text-danger">{torrent.error}</p>}
				
				<div className="btn-group">
					<a href={`${API_URL}/torrent/${torrent.id}`} download={torrent.name} className={`btn btn-info ${!downloaded && 'disabled'}`}>download</a>
					<button onClick={click} type='button' className="btn btn-danger" data-id={torrent.id}>remove</button>
				</div>
			</div>
		);
	}
}

export default TorrentInfo;