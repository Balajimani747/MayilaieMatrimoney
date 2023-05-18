import React from 'react';

import ProfileList from './profilelist';

const Profiles = () => {
  const PROFILES = [
    {
      id: 'u1',
      name: 'Alexander',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2',
      age: 31,
      raasi: 'Rishabam',
      place : 'Mayiladuthurai',
      education: 'MCA',
      job : 'Software Engineer',
      caste : 'Chettiyar',
      star : 'Krithigai',
      annualincome: '5LPA',
    },
    {
      id: 'u2',
      name: 'Alexander',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2',
      age: 31,
      raasi: 'Rishabam',
      place : 'Mayiladuthurai',
      education: 'MCA',
      job : 'Software Engineer',
      caste : 'Chettiyar',
      star : 'Krithigai',
      annualincome: '5LPA',
    },
    {
      id: 'u3',
      name: 'Alexander',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2',
      age: 31,
      raasi: 'Rishabam',
      place : 'Mayiladuthurai',
      education: 'MCA',
      job : 'Software Engineer',
      caste : 'Chettiyar',
      star : 'Krithigai',
      annualincome: '5LPA',
    },
    {
      id: 'u4',
      name: 'Alexander',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2',
      age: 31,
      raasi: 'Rishabam',
      place : 'Mayiladuthurai',
      education: 'MCA',
      job : 'Software Engineer',
      caste : 'Chettiyar',
      star : 'Krithigai',
      annualincome: '5LPA',
    },{
      id: 'u5',
      name: 'Alexander',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2',
      age: 31,
      raasi: 'Rishabam',
      place : 'Mayiladuthurai',
      education: 'MCA',
      job : 'Software Engineer',
      caste : 'Chettiyar',
      star : 'Krithigai',
      annualincome: '5LPA',
    },
    {
      id: 'u6',
      name: 'Alexander',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2',
      age: 31,
      raasi: 'Rishabam',
      place : 'Mayiladuthurai',
      education: 'MCA',
      job : 'Software Engineer',
      caste : 'Arya Vysya Chettiyar',
      star : 'Krithigai',
      annualincome: '5LPA',
    }
  ];

  return <ProfileList items={PROFILES} />;
};

export default Profiles;
