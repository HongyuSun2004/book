import React from 'react';

import './SideDrawer.css';
import math_logo from '../../svg/square-root-alt-solid.svg';
import biology_logo from '../../svg/dna-solid.svg';
import chemistry_logo from '../../svg/flask-solid.svg';
import english_logo from '../../svg/pen-fancy-solid.svg';
import history_logo from '../../svg/landmark-solid.svg';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/books/English"><img src={english_logo} className="subject-logo" alt="logo" /></a>
        </li>
        <li>
          <a href="/books/Biology"><img src={biology_logo} className="subject-logo" alt="logo" /></a>
        </li>
        <li>
          <a href="/books/Math"><img src={math_logo} className="subject-logo" alt="logo" /></a>
        </li>
        <li>
          <a href="/books/Chemistry"><img src={chemistry_logo} className="subject-logo" alt="logo" /></a>
        </li>
        <li>
          <a href="/books/History"><img src={history_logo} className="subject-logo" alt="logo" /></a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
