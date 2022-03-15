import React from "react";
import "./styles.css";
import logo from "./images/RJLogo.svg";

export const Nav = () => (
  <nav className="navbar navbar-dark navbar-fixed-top" role="navigation">
    <a href="/">
      <img id="logo" src={logo} alt="r and j logo" />
    </a>
    <div id="visibleNav">
      <a className="navItem" href="/aboutyou">
        <div className="navDivider selected">
          <p className="navText">About You</p>
        </div>
      </a>

      <a className="navItem" href="/yourcoach">
        <div className="navDivider">
          <p className="navText">Your Coach</p>
        </div>
      </a>

      <a className="navItem" href="/process">
        <div className="navDivider">
          <p className="navText">The Process</p>
        </div>
      </a>
      <a className="navItem" href="/freedomgoal">
        <div className="navDivider">
          <p className="navText">Freedom Goal</p>
        </div>
      </a>
      <a className="navItem" href="/events">
        <div className="navDivider">
          <p className="navText">Events</p>
        </div>
      </a>
      <a className="navItem" href="/contact">
        <div className="navDivider">
          <p className="navText">Contact</p>
        </div>
      </a>
    </div>
  </nav>
);
