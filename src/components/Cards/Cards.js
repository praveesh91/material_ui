import React, {Component}from "react";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { CardActionArea } from "@material-ui/core";

import './Cards.scss'

function CardContents(props) {
  return (
    <Grid item xs={12} md={3} sm={6}>
      <Card raised={true} style={{backgroundColor:'white'}}>
        {/* <CardActionArea>
            <CardMedia image="http://via.placeholder.com/50x50/1f1a38/ffffff?text=Image" />
            <CardContent>
              <Typography>{props.title}</Typography>
              <Typography>{props.location}</Typography>
            </CardContent>
        </CardActionArea> */}
        <CardActionArea>
        <div className="card">
          <div className="cardItems">
            <img className="img-fluid p-3" src={props.image} alt="Card image cap" />
            <div className="mt-3">
            <span className="styleCardTitle">{props.title}</span>
            <p className="styleLocationLabel">{props.location}</p>
            </div>
          </div>
        </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

class Cards extends Component {
    constructor(props) {
        super(props);
      }
    
      render() {
        return (
          <>
              <CardContents
                image={this.props.image}
                title={this.props.title}
                location={this.props.location}
                description={this.props.category}
              />
          </>
        );
      }
}

export default Cards

