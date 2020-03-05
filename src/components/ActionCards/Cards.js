import React, {Component}from "react";
import {Col, Button} from 'reactstrap';

function CardContent(props) {
  return (
    <div className="round bg-light">
      <div className="align-items-center p-3">
        <h5 className="styleLocationLabel">{props.location}</h5>
        <p className="styleCardTitle">{props.title}</p>
        <Button color="danger rounded-pill px-3">Take Action</Button>
      </div>
    </div>
  );
}

class Cards extends Component {
    constructor(props) {
        super(props);
      }
    
      render() {
        return (
            <Col xs="12" sm="6" lg="3" id={this.props.id}>
              <CardContent
                title={this.props.title}
                location={this.props.location}
                description={this.props.category}
              />
            </Col>
        );
      }
}

export default Cards

