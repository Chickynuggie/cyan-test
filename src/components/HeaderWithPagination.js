import React from "react";
import { connect } from "react-redux";
import { getUserData } from "../actions";

const HeaderWithPagination = ({getUserData, currentPage}) => (
  <div className="header-with-pagination">
    <div
      className="header-with-pagination__pager"
      disabled={currentPage === 1}
      onClick={() => getUserData(currentPage - 1)}
    >
      Previous
    </div>
    <div>{currentPage}</div>
    <div
      className="header-with-pagination__pager"
      onClick={() => getUserData(currentPage + 1)}
    >
      Next
    </div>
  </div>
);

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { getUserData })(HeaderWithPagination);
