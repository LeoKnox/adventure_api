import React, { Component } from 'react';
import RoomDetail from './roomdetail';
import RoomForm from './roomform';
import axios from 'axios';

class RoomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomsData: [],
            room: " ",
            showComponent: false,
        };
        this.getRoomDetail = this.getRoomDetail.bind(this);
        this.showRoomDetails = this.showRoomDetails.bind(this);
    }

    getRoomDetail(item) {
        axios
            .get("http://127.0.0.1:8000".concat(item.absolute))
            //.get(process.env.REACT_APP_URL.concat(item.absolute))
            .then((response) => {
                this.setState({room: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    showRoomDetails(item) {
        this.getRoomDetail(item);
        this.setState({ showComponent: true });
    }

    componentDidMount(){
        axios
            .get("http://127.0.0.1:8000/")
            //.get(process.env.REACT_APP_URL)
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
                <RoomForm />
            </div>
        );
    }
}
export default RoomList;