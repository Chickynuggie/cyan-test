import React from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../../actions';

class AppContainer extends React.Component {
    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        console.log(this.props.users);
        return <div>Hello</div>;
    }
}

const mapStateToProps = (state) => {
    return { users: state.userData };
};

export default connect(mapStateToProps, { getUserData })(AppContainer);