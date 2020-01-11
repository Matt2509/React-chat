import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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

const Login = props => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch;
  
  const handleChange = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
      if (dispatch) {
          props.handleMessageSubmit(dispatch);
          setUsername("");
      }
  };

    return (
        <div style={{ display: 'flex', padding: 10 }}>
                <input 
                value={username}
                onChange={handleChange}
                placeholder="login" 
                type="text" 
                style={inputStyle} 
                />
                <br />
                <button onClick={handleSubmit} style={buttonStyle}>
                    Se connecter
                    </button>
            </div>
    );
};





// const MessageBar = () => {
//     return (
//         <div style={{ display: 'flex', padding: 10 }}>
//             <input placeholder="Quoi de neuf ?" type="text" style={inputStyle} />
//             <br />
//             <button style={buttonStyle}>Tweeter</button>
//         </div>
//     );
// };

export default Login;
