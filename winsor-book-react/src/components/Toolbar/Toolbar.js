import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import seal from '../../winsor.png';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="/"><img src={seal} alt="" height="50" width="70"></img></a>         
        </div>
        <div className="textbookstitle">WINSOR TEXTBOOKS</div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;
