import React, { Component } from 'react';

import CardList from '../../components/Cards/CardList.js';
import StyledBackground from './Background'
import { Grid, Container, Typography } from '@material-ui/core';
// import ChartContainer from '../../components/Charts/ChartContainer/ChartContainer.js';
import Calendar from '../../components/Calender/Calender.js'
// import ActionList from '../../components/ActionCards/CardList.js'
import ViewContainer from '../../components/ParkingSpaceOverview/ParkingOverview/ViewContainer.js'

import '../../assets/scss/style.scss'

class Dashboard extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      dropdownOpen: false
    }
  }
  
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Container >
        <Grid container className='padding-btm'>
          <Typography className="userName" variant="h5" gutterBottom>
            Welcome! Jean Donas
          </Typography>
          <StyledBackground/>
        </Grid>
        <Grid container className='padding-btm'>
          <CardList />
        </Grid>
        <Grid container spacing={1} className='padding-btm'>
          <Grid item md={8} xs={12}>
            <ViewContainer />
          </Grid>
          <Grid item md={4} xs={12}>
            <Calendar />
          </Grid>
        </Grid>
          {/* <Row className="mt-4">
          <Col lg={8}> <ChartContainer /></Col>
          <Col lg={4}><Calendar /></Col> */}
         



          {/* </Row>
          
          <ViewContainer />

          <ActionList />
        */}
      </Container>
    )
  }
}

export default Dashboard;
