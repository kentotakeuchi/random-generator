import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

const HomePage = props => {
  return (
    <div className="home__container">
      <nav className="home__nav">
        <ul className="home__nav-list">
          <li className="home__nav-item">
            <Link to="/color">color</Link>
          </li>
          <li className="home__nav-item">
            <Link to="/digit">digit</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
