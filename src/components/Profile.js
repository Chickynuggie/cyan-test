import React from 'react';
import { connect } from 'react-redux';
import { clearUserSelection } from '../actions'

class Profile extends React.Component {

    render() {
        const profile = this.props.currentProfile;
        const arrej = ['kaki', 'pisi' , 'nyanya', 'nyanya', 'nyanya'];

        if(profile) {
            return  (<div className='profile' onClick={this.props.clearUserSelection}>
                <div className='profile__card'>
                    <div className='profile__card__column profile__card__column--left'>
                        <img className='profile__card__image' alt='avatar_big' src={`https://randomuser.me/api/portraits/women/${profile.id}.jpg`}></img>
                        <div className='profile__card__name'>{profile.name}</div>
                    </div>
                    <div className='profile__card__column profile__card__column--right'>
                        {profile.calls.length ? profile.calls.map(call => { <div className='profile__card__info'>{call}</div> }) : <div className='profile__card__info'>No recorded calls</div>}
                        {arrej.map(yay =>  <div className='profile__card__info'>nyanya: {yay}</div> )}

                    </div>
                </div>
            </div>);
        }

        return null;
    }
}

const mapStateToProps = () => {
    return {};
};

export default connect(mapStateToProps, { clearUserSelection })(Profile);