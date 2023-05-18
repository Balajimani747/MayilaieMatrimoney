import React from 'react';
import './profileitem.css';

import Avatar from './avatar/avatar.js';
import Card from './card/card.js';
import Button from '../uicomponents/button/button';

const ProfileItem = props => {
	const sendHeart = () => {
		console.log("Heart Sent");
	}
	return(
		<li className="profile-item container">
			<Card className="profile-item__content row">
				<div className="profile-item__image col-2">
					<Avatar image={props.image} alt={props.name} height="10rem" width="10rem"/>
					<div className="profile-item__name">
						{props.name}
					</div>
				</div>
				<div className="profile-item__profiledata1 col-3">
						<span className="row"><b className="col">Age:</b>{props.age}</span><br/>
						<span className="row"><b className="col">Education:</b>{props.education}</span><br/>
						<span className="row"><b className="col">Job:</b>{props.job}</span><br/>
						<span className="row"><b className="col">Place:</b>{props.place}</span>
				</div>
				<div className="profile-item__profiledata2 col-3">			
					<span className="row"><b className="col text-left">Raasi:</b>{props.raasi}</span><br/>
					<span className="row"><b className="col">Star:</b>{props.star}</span><br/>
					<span className="row"><b className="col">Caste:</b>{props.caste}</span><br/>
					<span className="row"><b className="col">Annual Income:</b>{props.annualincome}</span>
				</div>
				<div className="profile-item__button col-2">
					<Button name="Send Heart" className="medium-button" onClick={sendHeart}/><br/>
					<Button name="View Details" className="medium-button"/>
				</div>
			</Card>
		</li>
	);
}


export default ProfileItem;