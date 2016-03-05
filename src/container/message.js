import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import {authorize} from '../auth';
import {getMessage, getUser, getUserSession, deleteMessage, deleteImage} from '../action/index';

class Message extends Component{

  componentWillMount(){
    authorize(this.props, '/login')
      .then( () => {
        this.props.getMessage(this.props.params.id);
        this.interval = setInterval(() => {
          browserHistory.push('/messages');
        }, 15000);
      });
  }

  componentWillUnmount(){
    window.clearInterval(this.interval);
    this.props.deleteMessage(this.props.params.id);
    this.props.deleteImage(this.props.message.filepath);
  }

  render(){

    if(!this.props.message){
      return (<div></div>);
    }

    const {sender, message, imageUrl} = this.props.message
    return (
      <div>
        <h3>{sender}</h3>
        <p>{message}</p>
        <img src={imageUrl} alt=""/>
      </div>
    );
  }
}

const mapStateToProps = ({message}) => {
  return {message};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getMessage, getUser, getUserSession, deleteMessage, deleteImage}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);