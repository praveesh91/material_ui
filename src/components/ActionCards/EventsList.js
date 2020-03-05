import React from "react";
import Card from "./Cards";
import {Row} from 'reactstrap';

function EventsList(props) {
    const eventsList = props.data.map(event => (
        <Card
          title={event.description}
          location={event.header}
        />
      ));
    return <Row className="p-4 flex-nowrap">
              {eventsList}
           </Row>;
}

export default EventsList
