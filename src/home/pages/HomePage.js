import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.scss';
import Icon from '../../shared/Icon/Icon';

const HomePage = (props) => {
  return (
    <div className="home__container">
      <nav className="home__nav">
        <ul className="home__nav-list">
          <li className="home__nav-item">
            <Link to="/color">
              <span className="home__nav-item--red">c</span>
              <span className="home__nav-item--purple">o</span>
              <span className="home__nav-item--blue">l</span>
              <span className="home__nav-item--pink">o</span>
              <span className="home__nav-item--green">r</span>
            </Link>
          </li>
          <li className="home__nav-item">
            <Link to="/digit">digit</Link>
          </li>
          <li className="home__nav-item home__nav-item--settings">
            <Link to="/settings">
              <Icon width={60} height={60} id="icon-cog" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
