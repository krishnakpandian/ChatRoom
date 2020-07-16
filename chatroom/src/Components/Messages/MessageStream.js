
import React, { Component } from 'react';
import Message from './Message/Message';
import './MessageStream.scss';

class MessageStream extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  

  render() {
      return (
      <React.Fragment>
       <div class="message-stream-container">
            MessageStream Renders
        </div>
      </React.Fragment>
      );
    }
}

export default MessageStream;