import React from "react";
import "./sidenav.scss";
import UsrImg from "../../assets/users/forrest.jpeg";

export default function Sidenavitem(props) {
  if (props.user) {
    const User = { ...props.user[0].user };
    return (
      <li className="side-item">
        <span>
          <img
            src={UsrImg}
            className="icon-left user-avatar-sidenav"
            alt={`${User.firstName} ${User.lastName}`}
            title={`${User.firstName} ${User.lastName}`}
          />
        </span>
        <span className="display">{`${User.firstName} ${User.lastName}`}</span>
      </li>
    );
  }

  if (props.icon) {
    return (
      <li className="side-item">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="icon-left icon-account">
          {props.icon}
        </a>
        <span className="display">{props.display}</span>
      </li>
    );
  }
}