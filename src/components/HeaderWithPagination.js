import React from 'react';
import { connect } from 'react-redux';
import { goToNextPage, goToPreviousPage } from '../actions'

class HeaderWithPagination extends React.Component {
    render() {
        return (<div className="header-with-pagination">
            <div className="header-with-pagination__pager" onClick={this.props.goToPreviousPage}>Previous</div>
            <div>{this.props.currentPage}</div>
            <div className="header-with-pagination__pager" onClick={this.props.goToNextPage}>Next</div>
        </div>)
    }
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, { goToNextPage, goToPreviousPage })(HeaderWithPagination);