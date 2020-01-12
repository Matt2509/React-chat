import React, { Component } from 'react';
import { connect } from "react-redux";
import {sendMessage} from "./../action/msg"

const inputStyle = {
    borderRadius: 10,
    border: 'none',
    fontSize: 16,
    padding: 10,
    marginRight: 10,
    flexGrow: 1,
    backgroundColor: 'black',
    color: 'white',
};

const buttonStyle = {
    borderRadius: 10,
    cursor: 'pointer',
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    padding: 10,
    flexGrow: 1,
    border: '0.5px solid #336E7B',
    backgroundColor: '#1E90FF',
};

class MessageBar extends Component {
    /*
  const [message, setMessage] = useState("");
  
  const handleChange = e => {
      setMessage(e.target.value);
  };

  const handleSubmit = () => {
      if (message) {
          this.props.onAddMessage(message, "eee");
          setMessage("");
      }
  };

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
        console.log('enter');
        if (message) {
        props.onAddMessage(message);
        setMessage("");
        }
    }
  };*/

  state = { message: "" };

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.message !== "") {
      this.props.onAddMessage(this.state.message, "Matt");
      this.setState({ message: "" });
    }
  };
  
render(){
    return (
        <div style={{ display: 'flex', padding: 10 }}>

        <form
            onSubmit={this.handleSubmit}
            style={{ display: "flex", padding: 10 }}
        >
                <input 
                value={this.state.message}
                onChange={this.handleChange}
                placeholder="Quoi de neuf ?" 
                type="text" 
                style={inputStyle}
                // onKeyPress={this.handleKeyPress} 
                />
                <br />
                <button  type="submit" style={buttonStyle}>
                    Tweeter
                    </button>
        </form>
        </div>
    );
    }
};


const mapDispatchToProps = dispatch => {
    return {
      onAddMessage: (message, username) => {
        dispatch(sendMessage(message, username));
      }
    };
  };
  
  const connectComponent = connect(
    null,
    mapDispatchToProps
  );
  
  export default connectComponent(MessageBar);





// const MessageBar = () => {
//     return (
//         <div style={{ display: 'flex', padding: 10 }}>
//             <input placeholder="Quoi de neuf ?" type="text" style={inputStyle} />
//             <br />
//             <button style={buttonStyle}>Tweeter</button>
//         </div>
//     );
// };

// export default MessageBar;
