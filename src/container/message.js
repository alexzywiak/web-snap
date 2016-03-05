import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import {authorize} from '../auth';
import {getMessage, getUser, getUserSession, deleteMessage} from '../action/index';

class Message extends Component{

  componentWillMount(){
    authorize(this.props, '/login')
      .then( () => {
        this.props.getMessage(this.props.params.id);
        this.interval = setInterval(() => {
          browserHistory.push('/messages');
        }, 5000);
      });
  }

  componentWillUnmount(){
    window.clearInterval(this.interval);
    this.props.deleteMessage(this.props.params.id);
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
        <img src="http://localhost:1337/parse/files/myid/fc535c2269fb201e00ec621e50993dcf_test.jpg" alt=""/>
      </div>
    );
  }
}

const mapStateToProps = ({message}) => {
  return {message};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getMessage, getUser, getUserSession, deleteMessage}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);