import React, { useState, useEffect, useRef, useContext } from 'react';
import { SessionContext } from '../../../Context/LoginContext';

function ChatRoom({ roomName }) {
  roomName = '123';
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatSocketRef = useRef(null); // Ref to store the WebSocket connection
  const { formData } = useContext(SessionContext);

  useEffect(() => {
    fetch(`/api/messages/${roomName}/`)
      .then(response => response.json())
      .then(data => setMessages(data.messages))
      .catch(error => console.error('Error fetching messages:', error));


    // Create WebSocket connection.
    chatSocketRef.current = new WebSocket(
      'ws://' + window.location.hostname + ':8001/ws/chat/' + roomName + '/'
    );

    chatSocketRef.current.onopen = () => {
      console.log("WebSocket connection established");
    };

    chatSocketRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    chatSocketRef.current.onclose = (e) => {
      console.error('Chat socket closed unexpectedly', e);
    };

    chatSocketRef.current.onmessage = function(e) {
      const data = JSON.parse(e.data);
      setMessages(prevMessages => [...prevMessages, data]);
    };

    return () => {
      // Clean up WebSocket connection on component unmount
      chatSocketRef.current.close();
    };
  }, [roomName]);

  const sendMessage = () => {
    if (chatSocketRef.current && chatSocketRef.current.readyState === WebSocket.OPEN) {
      chatSocketRef.current.send(JSON.stringify({
        'message': newMessage,
        'user': formData?.username,
      }));
      setNewMessage('');
    } else {
      console.error("WebSocket is not open. ReadyState: ", chatSocketRef.current.readyState);
    }
  };

  return (
    <div>
      <h2>Room: {roomName}</h2>
      <div id="chat-log">
        {messages.map((msg, index) => (
          <div key={index}>{msg.user}: {msg.message}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatRoom;
