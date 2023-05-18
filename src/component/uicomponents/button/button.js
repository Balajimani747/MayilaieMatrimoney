import React from 'react';
import './button.css';

const Button = props => {
	return(
		 <button className={props.className}> {props.name}</button>
	);
}

export default Button;