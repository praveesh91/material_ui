import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Card from '@material-ui/core/Card';
import './Calender.scss';

import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button'
 
class Calender extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (


      <Card className="calendar-container" raised={true}>
        <CardHeader
          title="My Calendar"
          titleTypographyProps={{variant:'h6' }}
        />
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
            <div className="footer-btn">
              <Button variant="contained" color="primary">Add event +</Button>
            </div>
      </Card>
    );
  }
}

export default Calender;