import React, { useState, useEffect } from 'react';
import './Room.scss';
import io from 'socket.io-client';
import queryString from 'query-string';


const Room = ( {location}) => {
    const [user, setUser] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const PORT =  process.env.PORT || 4000 ;
    const socket = io(endpoint);
    const endpoint = 'localhost:' + PORT;
    useEffect(() => {
        const {name, room} = queryString.parse(location.search)
        setUser(name);
        setRoom(room);
        socket.emit('join', {name, room}, ({error}) => {
          alert(error);
        });
        return () => {
          socket.emit('disconnect');
          socket.off();
        }
    },[endpoint, location.search]);

    useEffect(() => {
      socket.on('message', message => {
        setMessages(messages => [ ...messages, message ]);
      });
      
      socket.on("roomData", ({ users }) => {
        setUsers(users);
      });
  }, []);

      return (
      <React.Fragment>
       <div class="room-container">
            Room Renders
        </div>
      </React.Fragment>
      );

}

export default Room;