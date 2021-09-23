import React from "react";
import { connect } from "react-redux";
import { popToastMessage } from "../actions/index";

const Toaster = ({ toastMessage, popToastMessage }) =>
  toastMessage ? (
    <div className="toaster">
      {toastMessage}
      <div className="toaster__CTA" onClick={() => popToastMessage("")}>
        Got it
      </div>
    </div>
  ) : null;

const mapStateToProps = (state) => {
  return {
    toastMessage: state.toastMessage,
  };
};

export default connect(mapStateToProps, { popToastMessage })(Toaster);
