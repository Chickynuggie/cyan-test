import React from 'react';
import spinner from '../assets/spinner.svg';

class Spinner extends React.Component {
    render() {
        if (this.props.isSpinning) {
            return <div className='spinner'>
                <img alt='spinner' className='spinner__animated-svg' src={spinner}></img>
            </div>
        }

        return null;
    }
}

export default Spinner;