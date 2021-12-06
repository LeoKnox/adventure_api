import React, { Component } from "react";
import axios from "axios";

class RoomForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room_name: " ",
            description: " ",
            length: " ",
            width: " ",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        //console.log(this.state.room_name);
        axios
            .post("http://127.0.0.1:8000/create/", {
                room_name: this.state.room_name,
                description: this.state.description,
                width: this.state.width,
                length: this.state.length,
            })
            .then((response) =>{
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const { 
            room_name,
            description,
            length,
            width,
        } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    Room:
                    <input
                        type="text"
                        name="room_name"
                        value={room_name}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    Description:
                    <input
                        type="textarea"
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    Length:
                    <input
                        type="text"
                        name="length"
                        value={length}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    Width:
                    <input
                        type="text"
                        name="width"
                        value={width}
                        onChange={this.handleChange}
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default RoomForm;