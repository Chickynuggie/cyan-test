import React from "react";
import { connect } from "react-redux";
import { clearUserSelection } from "../actions";

const Profile = ({ currentProfile, clearUserSelection }) =>
currentProfile ? (
    <div className="profile" onClick={clearUserSelection}>
      <div className="profile__close">Click to close</div>
      <div className="profile__card" onClick={(e) => e.stopPropagation()}>
        <div className="profile__card__column profile__card__column--narrow">
          <img
            className="profile__card__image"
            alt="avatar_big"
            src={`https://randomuser.me/api/portraits/women/${currentProfile.id}.jpg`}
          ></img>
          <div className="profile__card__name">{currentProfile.name}</div>
        </div>
        <div className="profile__card__column profile__card__column--wide">
          <div className="profile__card__info">Recorded calls</div>
          <ol className="profile__card__info__list">
            {currentProfile.calls.length ? (
              currentProfile.calls.map((call) => (
                <li
                  key={call}
                  className="profile__card__info--smaller-no-underline"
                >
                  {call}
                </li>
              ))
            ) : (
              <div className="profile__card__info profile__card__info--smaller-no-underline">
                No recorded calls
              </div>
            )}
          </ol>
        </div>
        <div className="profile__card__column profile__card__column--wide">
          <div className="profile__card__info">Recorded accounts</div>
          <ol className="profile__card__info__list">
            {currentProfile.accounts.length ? (
              currentProfile.accounts.map((account) => (
                <li
                  key={account}
                  className="profile__card__info--smaller-no-underline"
                >
                  {account}
                </li>
              ))
            ) : (
              <div className="profile__card__info profile__card__info--smaller-no-underline">
                No recorded accounts
              </div>
            )}
          </ol>
        </div>
      </div>
    </div>
  ) : null;

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { clearUserSelection })(Profile);
