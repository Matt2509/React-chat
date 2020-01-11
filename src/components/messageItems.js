import React from 'react';
//import PropTypes from 'prop-types';
import { deleteMessage } from "./../action/msg";
import { connect } from "react-redux";

const MessageItem = ({ message, suppMessage, index }) => {
    return (
        <li
            style={{
                marginBottom: 10,
                color: 'white',
                //backgroundColor: 'black',
                padding: 15,
                borderRadius: 2,
            }}
        >
            <div> 
            {message.username} 
            <small onClick={() => suppMessage(index)} style={{ right: 10, top: 15, cursor: "pointer" }}> ❌ </small>
            </div>
            <div>
                <small>
                    <p>{message.message}
                    </p>
                </small>
            </div>
        </li>
    );
};

/*MessageItem.propTypes = {
    message: PropTypes.object.isRequired
};*/

const mapDispatchToProps = dispatch => {
    return {
        suppMessage: index => {
        //  console.log('suppp');
        dispatch(deleteMessage(index));
      },
    };
  };

export default connect(null, mapDispatchToProps)(MessageItem);
