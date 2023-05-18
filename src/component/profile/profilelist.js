import React from "react";
import './profilelist.css';

import ProfileItem from './profileitem';
import Card from './card/card';

const ProfileList = props => {

	if(props.items && props.items.length > 0){
		return(
			<ul className="profiles-list">
				{props.items.map(profile =>
					<ProfileItem 
						key={profile.id}
						id={profile.id}
						image={profile.image}
						name={profile.name}
						age={profile.age}
						raasi={profile.raasi}
						place={profile.place}
						education={profile.education}
						job={profile.job}
						caste={profile.caste}
						star={profile.star}
						annualincome={profile.annualincome}
					/>
				)}
			</ul>
		)
	} else {
		return(
		    <Card>
			    <div> No Profiles Matched </div>
            </Card>
		);
	}
};

export default ProfileList;