import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Popup from './Popup'
import axios from 'axios'
import './MapContainer.scss'
class MapContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            stores: [],
            showPopup: false 
        }
    }
    componentDidMount(){
        axios.get("https://praveesh91.github.io/test_json/mapData.json")
        .then(response =>{
            const data = response.data.stores;
            this.setState({
                stores:data
            })
        })
        
    }
    handleMarkerClick = () =>{
        this.setState({  
            showPopup: !this.state.showPopup  
       });  
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
         onClick={() => this.handleMarkerClick()} />
        })
      }

render() {
    return (
        <div className='mapContainer'>
            <Map
                google={this.props.google}
                zoom={10}
                initialCenter={{ lat: 47.444, lng: -122.176}}>
                {this.displayMarkers()}
            </Map>
            {this.state.showPopup ?  
                <Popup  
                    text='Click "Close Button" to hide popup'  
                    // closePopup={this.togglePopup.bind(this)}  
                />  
                : null  
            }
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCq1D3cnZycxn5PCwiahpHscgep3yoN35U'
})(MapContainer);
