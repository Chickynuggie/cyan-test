import React from 'react';

class Profile extends React.Component {

    render() {
        if(!this.props.currentProfile) {
            return <div>Click a profile</div>
        }

        return <div className='profile'>{this.props.currentProfile.name}</div>;
    }
}

export default Profile;