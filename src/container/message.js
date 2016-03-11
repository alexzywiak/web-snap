import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import {authorize} from '../auth';
import {getMessage, getUser, getUserSession, deleteMessage, deleteImage, sendFlashMessage} from '../action/index';

import MessageView from '../component/message_view';

class Message extends Component{

  componentWillMount(){
    authorize(this.props, '/web-snap/login')
      .then( () => {
        this.props.getMessage(this.props.params.id);
        this.interval = setInterval(() => {
          browserHistory.push('/web-snap/messages');
        }, 15000);
      });
  }

  componentWillUnmount(){
    this.props.sendFlashMessage({
      className: 'alert-warning',
      message: 'Time\'s up!  All gone!'
    });
    window.clearInterval(this.interval);
    this.props.deleteMessage(this.props.params.id);
    this.props.deleteImage(this.props.message.filepath);
  }

  render(){
    return (
      <MessageView 
        message={this.props.message} />
    );
  }
}

const mapStateToProps = ({message}) => {
  return {message};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getMessage, getUser, getUserSession, deleteMessage, deleteImage, sendFlashMessage}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);