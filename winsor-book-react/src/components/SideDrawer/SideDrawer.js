import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/books/Chemistry">Books Chemistry</a>
        </li>
        <li>
          <a href="/books/Biology">Books Biology</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
