import React from "react";
import { connect } from "react-redux";
import { selectUser } from "../actions";
import logo from "../assets/more.svg";

const AccountList = ({selectUser, pagedProfiles}) => (
  <div className="account-list">
    {pagedProfiles.map((profile) => (
      <div
        key={profile.id}
        className="account-list__card"
        onClick={() => selectUser(profile.id.toString())}
      >
        <img
          alt="details"
          src={logo}
          className="account-list__card__details-icon"
        ></img>
        <div className="account-list__card__top">
          <img
            className="account-list__card__top__avatar"
            src={`https://randomuser.me/api/portraits/women/${profile.id}.jpg`}
            alt="avatar"
          />
          <div className="account-list__card__top__info">{profile.name}</div>
        </div>
        <div className="account-list__card__info">
          <div>Country:</div>
          <div className="text-overflow-ellipsis">
            {profile.country || "not provided"}
          </div>
        </div>
        <div className="account-list__card__info">
          <div>City: </div>
          <div className="text-overflow-ellipsis">
            {profile.city || "not provided"}
          </div>
        </div>
        <div className="account-list__card__info">
          <div>Address: </div>
          <div className="text-overflow-ellipsis">
            {profile.address || "not provided"}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { selectUser })(AccountList);
