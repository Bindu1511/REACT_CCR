import React from 'react';
import User from './User';

const Userprofile= () => {
    const userdata={
    name:'Ms.Bindu Raju',
    age:20,
    location:'Banglore'
};

return (
    <div>
        <User name={userdata.name}age={userdata.age}location={userdata.location}/>

    </div>
);
};
export default Userprofile;