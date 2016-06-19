import React from 'react';

export default (props) => {
	const { type, message, dismissible } = props;

	return (
		<div className={`alert alert-${type} ${dismissible && 'alert-dismissible fade in'}`} role='alert'>
			{dismissible &&
			 <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    		 <span aria-hidden="true">&times;</span>
  		 </button>
  		}
			<strong>Oh no!</strong>	{message}
		</div>
	);
}