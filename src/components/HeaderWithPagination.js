import React from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../actions'

class HeaderWithPagination extends React.Component {
    render() {
        return (<div className="header-with-pagination">
            <div className="header-with-pagination__pager" disabled={this.props.currentPage === 1} onClick={() => this.props.getUserData(this.props.currentPage - 1)}>Previous</div>
            <div>{this.props.currentPage}</div>
            <div className="header-with-pagination__pager" onClick={() => this.props.getUserData(this.props.currentPage + 1)}>Next</div>
        </div>)
    }
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, { getUserData })(HeaderWithPagination);