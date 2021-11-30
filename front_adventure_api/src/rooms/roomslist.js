import React, { Component } from 'react';
import axios from 'axios';

class RoomList extends Component {
    state = {
        roomsData:[],
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:8000/")
        .then((response) => {
            this.setState({roomsData: response.data})
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return(
            <div>
                {this.state.roomsData.map( item => {
                    return <h3 key={item.id}>{item.room_name}: {item.description}</h3>
                    })
                }
            </div>
        )
    }
}
export default RoomList;