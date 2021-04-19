import React from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../actions';
import Profile from './Profile';
import AccountList from './AccountList';

class AccountsContainer extends React.Component {

    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        const currentProfile = this.props.users ? this.props.users.find(user => this.props.currentProfileId === user.id) : null;

        return <div className='accounts-container'>
            <Profile currentProfile={currentProfile}/>
            <AccountList />
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userData,
        currentProfileId: state.selectedProfileId
    };
};

export default connect(mapStateToProps, { getUserData })(AccountsContainer);