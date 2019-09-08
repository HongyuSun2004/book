import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import winsor_logo from './winsor.png';

import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="/"><img src={winsor_logo} alt="" height="50" width="70"></img></a>         
        </div>
        <div className="textbookstitle">WINSOR TEXTBOOKS</div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/">Search For Books</a></li>
                <li><a href="/">My Books For Sale</a></li>
                <li><a href="/">My Wishlist</a></li>
                <li><a href="/">My Profile</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;
