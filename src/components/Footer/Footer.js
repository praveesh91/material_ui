import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import './_footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <Grid container>
            <Grid item xs={6} py={2}>
              <span> &copy; 2020 | ParkZeus | All Rights Reserved</span>
            </Grid>
            <Grid item xs={6} py={2} style={{paddingRight:10}} align={'right'}>
              <span> Help & Support | Legal | Data Privacy | Sitemap</span>
            </Grid>
        </Grid>
      </footer>
    )
  }
}

export default Footer;
