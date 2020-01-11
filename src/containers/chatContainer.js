import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chat from "./../components/chat";
import { sendMessage } from "./../action/msg";

class ChatContainer extends Component {
  render() {
    return this.props.isReady && <Chat {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    colorCode: state.settings.colorCode,
    isReady: state.app.isRehydrated,
  }
};

const mapDispatchToProps =  {
  sendMessage
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(ChatContainer);
