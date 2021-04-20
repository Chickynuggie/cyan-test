import React from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions';
import logo from '../assets/more.svg';

class AccountList extends React.Component {

    render() {
        return (<div className='account-list'>
            {this.props.pagedProfiles.map(profile => <div
                key={profile.id}
                className='account-list__card'
                onClick={() => this.props.selectUser(profile.id.toString())}>
                    <img alt="details" src={logo} className='account-list__card__details-icon'></img>
                    <div className='account-list__card__top'>
                        <img className='account-list__card__top__avatar' src={`https://randomuser.me/api/portraits/women/${profile.id}.jpg`} alt='avatar' />
                        <div className='account-list__card__top__info'>{profile.name}</div>
                    </div>
                    <div className='account-list__card__info'><div>Country</div><div>{profile.country || 'not provided'}</div></div>
                    <div className='account-list__card__info'><div>City: </div><div>{profile.city || 'not provided'}</div></div>
                    <div className='account-list__card__info'><div>Address: </div><div>{profile.address || 'not provided'}</div></div>
            </div>)}
        </div>)
    };
}

const mapStateToProps = (state) => {
    return {
        currentpage: state.currentpage
    };
};

export default connect(mapStateToProps, { selectUser })(AccountList);