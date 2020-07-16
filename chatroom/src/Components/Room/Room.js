import React, { Component } from 'react';
import './Room.scss';



class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
      return (
      <React.Fragment>
       <div class="room-container">
            Room Renders
        </div>
      </React.Fragment>
      );
    }
}

export default Room;