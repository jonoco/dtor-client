import React from 'react';

export default (props) => {
	const { type, message } = props;

	return (
		<div className={`alert alert-${type}`} role='alert'>
			<strong>Oh no!</strong>	{message}
		</div>
	);
}