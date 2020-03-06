import React, {Component} from 'react';
import {BrowserRouter,Link, Switch, Route, Redirect} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

import Dashboard from './pages/Dashboard/Dashboard';
import ParkingManagement from './pages/ParkingManagement/ParkingMngmt'
import StyledBackground from './pages/Dashboard/Background'
import './assets/scss/style.scss'


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       open: true,
       setIsOpen: false
    }
    console.log("setIsOpen inside state",this.state.setIsOpen)

  }

  
toggleDrawer = (props) => {
    this.setState(prevState =>({
      setIsOpen: !prevState.setIsOpen
    }));
    console.log("setIsOpen",this.state.setIsOpen)
  }

  
  render() {
    return (
      <div className="app">
        <Grid container >
          <Header toggleMenu={this.toggleDrawer} />
        </Grid>

        <Grid container>
          <div>
            <Sidebar openState={this.state.setIsOpen} />
          </div>
          <div style={{flex:'auto'}}>
            {/* <Switch>
              <Route path="/">
                <ParkingManagement />
              </Route>
              <Route path="/parkOverview">
                <Dashboard/>
              </Route>
            </Switch> */}
              <BrowserRouter>
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route exact path="/parkOverview" component={ParkingManagement} />
              </Switch>
              </BrowserRouter>

          </div>
        </Grid>
        <Grid container>
          <Grid item xs={12}> 
            <Footer />
          </Grid>
          </Grid>
      </div>
    );
  }
}

export default App;
