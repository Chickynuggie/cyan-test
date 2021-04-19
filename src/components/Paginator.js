import React from 'react';
import { connect } from 'react-redux';

class Paginator extends React.Component {

    render() {
        return <div className='paginator'>
            <div>Previous</div>
            <div>0</div>
            <div>Next</div>
        </div>
    }
}