import React from 'react';
import { connect } from 'react-redux';
import { popToastMessage } from '../actions/index';

class Toaster extends React.Component {
    render() {
        if (this.props.toastMessage) {
            return <div className='toaster'>
                {this.props.toastMessage}
                <div className='toaster__CTA' onClick={() => this.props.popToastMessage('')}>Got it</div>
            </div>;
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        toastMessage: state.toastMessage
    };
}

export default connect(mapStateToProps, { popToastMessage })(Toaster);
