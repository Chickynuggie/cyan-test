import React from 'react';
import { connect } from 'react-redux';
import { clearUserSelection } from '../actions'

class Profile extends React.Component {

    render() {
        const profile = this.props.currentProfile;

        if(profile) {
            return  (<div className='profile' onClick={this.props.clearUserSelection}>
                <div className='profile__card'>
                    <div className='profile__card__column profile__card__column--narrow'>
                        <img className='profile__card__image' alt='avatar_big' src={`https://randomuser.me/api/portraits/women/${profile.id}.jpg`}></img>
                        <div className='profile__card__name'>{profile.name}</div>
                    </div>
                    <div className='profile__card__column profile__card__column--wide'>
                        <div className='profile__card__info'>Recorded calls</div>
                        <ol>{profile.calls.length ?
                            profile.calls.map(call => <li className='profile__card__info--smaller-no-underline'>{call}</li>) :
                            <div className='profile__card__info profile__card__info--smaller-no-underline'>No recorded calls</div>}
                        </ol>
                    </div>
                    <div className='profile__card__column profile__card__column--wide'>
                        <div className='profile__card__info'>Recorded accounts</div>
                        <ol>{profile.accounts.length ?
                        profile.accounts.map(account => <li className='profile__card__info--smaller-no-underline'>{account}</li>) :
                        <div className='profile__card__info profile__card__info--smaller-no-underline'>No recorded accounts</div>}</ol>
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