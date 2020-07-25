import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Join.scss';


class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        room: ''
    };
    this.handleChange = this.handleChange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange = (event) => { //Changes State of an Object
    event.preventDefault()
    console.log(this.state)
    this.setState({
        [event.target.name]: event.target.value
    })
  }

//   onSubmit = (e) => {
//     (!this.state.name || !this.state.room) ? e.preventDefault() : null;
//   }

  render() {
      const { name, room } = this.state
      return (
      <React.Fragment>
       <div class="join-container">
            Join Renders 
            <input type="text"                     
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="name"
            maxLength="100"/>

            <input type="text"                     
            type="text"
            name="room"
            value={this.state.room}
            onChange={this.handleChange}
            placeholder="room"
            maxLength="100"/>

            <Link disabled = {!name || !room }onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/room?name=${name}&room=${room}`}>
                <button disabled = {!name || !room }>submit</button>
            </Link>
        </div>
      </React.Fragment>
      );
    }
}

export default Join;

