import React from 'react';
import './avatar.css';

const Avatar = props => {
	return (
		<div>
			<div className={`avatar ${props.name}`} style={props.style}>
				<img 
					src={props.image}
					alt={props.alt}
					style={{width:props.width, height:props.height}}/>
			</div>
		</div>
	)

}

export default Avatar;