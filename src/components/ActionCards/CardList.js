import React, {Component} from 'react';
import axios from 'axios';
import EventsList from './EventsList.js';
import './ActionCards.css'

class CardList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             actions: []
        }
    }

    componentDidMount(){
        axios.get("https://praveesh91.github.io/test_json/actionData.json")
            .then(res =>{
                const data = res.data.actionData
                // console.log(data);
                this.setState({actions:data})
            })
    }

    render() {
        return (
            <div className="actionContainer bg-white mb-3">
                <EventsList data={this.state.actions} />
            </div>
        )
    }
}

export default CardList

