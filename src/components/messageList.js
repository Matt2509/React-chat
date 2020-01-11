//import  { PureComponent } from "react";
import React from "react";
import MessageItem from "./messageItems";
//import Reducer from "../reducer/msg";
//import PropTypes from "prop-types";
import { connect } from 'react-redux';



const style = { 
  borderColor: "grey", 
  padding: 10, 
  listStyle: "none" 
};

const MessageList = ({ messages }) => {

    /*const propTypes = {
        messages: PropTypes.array.isRequired,
        isPending: PropTypes.bool
      };*/

    return (
        <ul style={style}>
        {messages.map((message, i) => {
            return <MessageItem key={i} message={message}/>;
        })}
        {messages.lenght === 0 && <li>
            Pas de message 
            <span 
            role="img" 
            aria-label="ballon">
            yolo 
            </span>
            </li>
            }
        </ul>
    );
};

const mapStateToProps = state => {
    return {
      messages: state.message.messages,
    };
  };

const connectComponent = connect(mapStateToProps);

export default connectComponent(MessageList);