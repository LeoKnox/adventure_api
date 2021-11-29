import React, { Component } from 'react';
import TestData from './test_data.json';
import RoomDetail from './roomdetail';

class RoomList extends Component {
    render() {
        return(
            <div>
                {TestData.map( item => {
                    return <RoomDetail r = {item} />
                    })
                }
            </div>
        )
    }
}
export default RoomList;