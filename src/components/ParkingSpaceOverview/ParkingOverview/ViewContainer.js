import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import AppsIcon from '@material-ui/icons/Apps';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import MapIcon from '@material-ui/icons/Map';
import Button from '@material-ui/core/Button';

import outside from '../../../assets/images/outside.png'
import offline from '../../../assets/images/offline.png'
import live from '../../../assets/images/live.png'


import CardView from './CardView'
import ListView from './ListView'
import MapContainer from '../MapView/MapContainer'
import './ViewContainer.scss'
import { CardContent } from '@material-ui/core';

import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

const primary1 = blue[300];
const secondary1 = grey[500];

export class ViewContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             listType: false,
             CardType: true,
             mapType: false,
        }
    }

    handleCard(e){
        this.setState(() => ({
            listType: false,
            CardType: true, 
            mapType: false
        }));
        // e.preventDefault();
    }

    handleList(e){
        this.setState(() => ({
            CardType: false,
            listType: true,
            mapType: false 
        }));
        // e.preventDefault();
    }

    handleMap(e){
        this.setState(() => ({
            CardType: false,
            listType: false,
            mapType: true ,
        }));
        // e.preventDefault();
    }
    
    render() {
        const listType = this.state.listType;
        const CardType = this.state.CardType;
        const mapType = this.state.mapType;

        const viewType = this.state.viewType;
        // console.log("viewType",viewType)
        return (
                
                    <Card raised={true} className='card-cont'>

                        <CardHeader
                            action={
                                <div>
                                    <IconButton color={listType ? 'primary' : 'disabled'} onClick = {()=> {this.handleList()}}><ListIcon /></IconButton>
                                    <IconButton color={CardType ? 'primary' : 'disabled'} onClick = {()=> {this.handleCard()}}><AppsIcon /></IconButton>
                                    <IconButton color={mapType ? 'primary' : 'disabled'}  onClick = {()=> {this.handleMap()}}><MapIcon /></IconButton>
                                </div>
                            }
                            title="Parking Space Overview"
                            titleTypographyProps={{variant:'h6' }}
                            />
                        <CardContent>
                        <Scrollbars
                            autoHide 
                            style={{ height: 450 }}>

                            {listType && <ListView/>}
                            {CardType && <CardView/>}
                            {mapType && <MapContainer/>}
                        </Scrollbars>

                            <div className="card-footer">
                                <Button variant="contained" color="primary">View All Locations</Button>
                                <div className="legend-cont">
                                    <div className="legend">
                                        <img src={live} /><span>Live and open</span>
                                    </div>
                                    <div className="legend">
                                        <img src={offline} /><span>Outside Operating Hours</span>
                                    </div>
                                    <div className="legend">
                                        <img src={outside} /><span>Offline / Deactivated</span>
                                    </div>
                                </div>

                            </div>
                        </CardContent>
                    </Card>

        )
    }
}

export default ViewContainer
