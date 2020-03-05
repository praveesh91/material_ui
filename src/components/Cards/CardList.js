import React, {Component} from 'react';
import axios from 'axios';
import EventsList from './EventsList.js';
import { Grid } from '@material-ui/core';

class CardList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            actions: []
        }
    }

    componentDidMount(){
        axios.get("https://praveesh91.github.io/test_json/cardData.json")
            .then(res =>{
                const data = res.data.cardData.splice(0,4);
                this.setState({actions:data})
            })
    }

    render() {
        const {actions} = this.state;
        const daata = actions.map(event=>{
            console.log(event.number)
            
        })
        return (
            <EventsList data={this.state.actions} />
        )
    }
}

export default CardList

