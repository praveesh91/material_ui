import React from "react";
import Grid from '@material-ui/core/Grid';
import Cards from './Cards'

function EventsList(props) {
    const eventsList = props.data.map(event => (
        <Cards
          key={event.number}
          title={event.number}
          location={event.label}
          image={event.image}
        />
      ));
    return <Grid container spacing={1}>{eventsList}</Grid>;
}

export default EventsList
