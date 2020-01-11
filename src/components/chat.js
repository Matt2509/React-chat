import React, { useState } from "react";
import MessageList from "./messageList";
import MessageBar from "./messageBar";
import "../App.css";

const chatStyle = {
    borderRadius: 10,
    fontFamily: "Montserrat",
    width: 400,
    backgroundColor: "black",
    padding: 10,
    marginLeft: 'auto',
    marginTop: 20,
    marginRight: 'auto',
    display: "flex",
    flexDirection: "column"
};

const titleStyle = {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 30,
    color: '#1E90FF',
    border:'silver'
};

const Chat = () => {
    /*const [messages, setMessages] = useState([]);

    const handleMessageSubmit = message => {
        setMessages([...messages, { body: message, username: "me"}]);
    }*/

    return (
        <div style={chatStyle}>
            {/* <img src={require('../img/social_media_icons_neon_set_256x256_0002_twitter.png')} name="logo" /> */}
            <div style= {{paddingLeft: 10, paddingTop: 10, fontSize:30 }}>
                <span role="img" aria-label="langue">
                
                </span>{" "}

            </div>
            <div style={titleStyle}> 🐦Twi Twi</div>
            <MessageList />
            <MessageBar />
        </div>
    );
};

export default Chat;