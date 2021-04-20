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
        const pageSize = 7;
        const pagedProfiles = this.props.users.slice((this.props.currentPage - 1) * pageSize, this.props.currentPage * pageSize);

        return <div className='accounts-container'>
            <Profile currentProfile={currentProfile}/>
            <AccountList pagedProfiles={pagedProfiles}/>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userData,
        currentProfileId: state.selectedProfileId,
        currentPage: 1
    };
};

export default connect(mapStateToProps, { getUserData })(AccountsContainer);