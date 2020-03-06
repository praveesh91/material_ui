import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import verified from '../../../assets/images/verified tag.png'
import live from '../../../assets/images/live.png'


import './ViewContainer.scss'

class CardView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cardData: []
        }
    }
    componentDidMount(){
        axios.get("https://praveesh91.github.io/test_json/overviewData.json")
            .then(res =>{
                const data = res.data.parkingOverview;
                this.setState({cardData:data})
            })
    }
    render() {
        return (
            <Grid container>
                    {this.state.cardData.map((e) => (
   
                        <Grid key={e.id} item md={6} m={2} className="container-card">
                        <Card className="cust-card" style={{backgroundColor:'#ededed'}}>
                        <CardHeader
                            action={
                                <div>
                                    <IconButton><MoreVertIcon /></IconButton>
                                </div>
                            }
                            title={e.spaceName}
                            titleTypographyProps={{ variant:"title", component:"h4" }}
                            avatar={
                                <Avatar>
                                  <img src={live} alt="add people" />
                                </Avatar>
                              }
                            />
                            
                            <CardContent>
                            <img className="verified-image" src={verified} />
                            <div className="info-container mb-2 mt-2">
                                <div className="status">
                                    <b>Occupied</b>
                                    <p>{e.status.Booked}</p>
                                </div>
                                <div className="status">
                                    <b>Vacant</b>
                                    <p>{e.status.Vacant}</p>
                                </div>
                                <div className="status">
                                    <b>Booked</b>
                                    <p>{e.status.Occupied}</p>
                                </div>
                                <div className="status">
                                    <b>Unavailable</b>
                                    <p>{e.status.Unvailable}</p>
                                </div>
                            </div>
                            </CardContent>
                            </Card>
                        </Grid>
                            

                    ))}
                
                </Grid>
            
        )
    }
}

export default CardView
