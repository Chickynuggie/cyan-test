import React from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../actions';

class AccountsContainer extends React.Component {

    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        return <div className='accounts-container'>
            
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userData
    };
};

export default connect(mapStateToProps, { getUserData })(AccountsContainer);