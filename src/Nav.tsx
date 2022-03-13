import React from 'react';
import './styles.css'
import logo from './images/RJLogo.svg'


export const Nav = () => (
  <nav className="navbar navbar-dark navbar-fixed-top" role="navigation">
      <a href="/">
        <img id="logo" src={logo} />
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
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#exCollapsingNavbar"
        aria-controls="exCollapsingNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div className="collapse" id="exCollapsingNavbar">
        <div className="bg-inverse text-muted p-1">
          <ul>
            <a href="/aboutyou">
              <li>
                <span className="text-muted">About You</span>
              </li>
            </a>
            <a href="/yourcoach">
              <li>
                <span className="text-muted">Your Coach</span>
              </li>
            </a>

            <a href="/process">
              <li>
                <span className="text-muted">The Process </span>
              </li>
            </a>

            <a href="/freedomgoal">
              <li>
                <span className="text-muted">Freedom Goal</span>
              </li>
            </a>
            <a href="/events">
              <li>
                <span className="text-muted">Events</span>
              </li>
            </a>
            <a href="/contact">
              <li>
                <span className="text-muted">Contact</span>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
    );
