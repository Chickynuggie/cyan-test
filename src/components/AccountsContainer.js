import React from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../actions';
import Profile from './Profile';
import AccountList from './AccountList';
import HeaderWithPagination from './HeaderWithPagination';
import Toaster from './Toaster';
import Spinner from './Spinner';

class AccountsContainer extends React.Component {

    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        const currentProfile = this.props.users ? this.props.users.find(user => this.props.currentProfileId === user.id) : null;

        return <div className='accounts-container'>
            <Spinner isSpinning={this.props.isSpinning} />
            <Toaster toastMessage={this.props.toastMessage} />
            <HeaderWithPagination currentPage={this.props.currentPage} />
            <Profile currentProfile={currentProfile} />
            <AccountList pagedProfiles={this.props.users} />
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userData,
        currentProfileId: state.selectedProfileId,
        currentPage: state.currentPage,
        toastMessage: state.toastMessage,
        isSpinning: state.isSpinning
    };
};

export default connect(mapStateToProps, { getUserData })(AccountsContainer);