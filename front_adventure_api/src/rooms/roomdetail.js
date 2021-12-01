import React, { Component } from 'react';

class RoomDetail extends Component {
    render() {
        const obj = this.props.roomDetail;
        return (
            <div style={{ color: "yellow", border: "1px solid yellow" }}>
                <h4>{obj.room_name}</h4>
                <p>{obj.description}</p>
            </div>
        );
    }
}
export default RoomDetail;