import React from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions';

class AccountList extends React.Component {

    render() {
        return <div className='account-list' onClick={() => this.props.selectUser("3")}>AccountList</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        usersByPage: state.userData,
    };
};

export default connect(mapStateToProps, { selectUser })(AccountList);