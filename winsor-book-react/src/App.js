import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Book/Home';
import Books from './components/Book/Books';
import BookOnMarket from './components/Book/BookOnMarket';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/books/:subject" component={Books} />
              <Route path="/book/:id" component={BookOnMarket} />
            </div>
          </Router>
        </main>
        
      </div>
    );
  }
}

export default App;
