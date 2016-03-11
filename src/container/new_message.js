import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import { authorize } from '../auth';
import {getUsers, getUser, newMessage, getUserSession, uploadFile, sendFlashMessage} from '../action/index';

import NewMessageForm from '../component/new_message_form';

class NewMessage extends Component{

  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    this.props.getUsers();
    authorize(this.props, '/web-snap/login');
  }

  handleSubmit(data){
    this.props.uploadFile(data.filepath)
      .then(resp => {
        const {url, name} = resp.payload.data;
        data.imageUrl = url;
        data.filepath = name;
        this.props.newMessage(data)
        .then(resp => {
          this.props.sendFlashMessage({
            className: 'alert-success',
            message: 'You snapped a chat!  Way to go!'
          });
          browserHistory.push('web-snap/messages');
        });
      });
  }

  render(){

    if(!this.props.loggedInUser){
      return (
        <div></div>
        );
    }

    return (
      <div>
        <NewMessageForm 
        handleSubmit={this.handleSubmit}
        loggedInUser={this.props.loggedInUser}
        users={this.props.users} />
      </div>
      );
  }
}

const mapStateToProps = (state) => {

  const {loggedInUser, users, session} = state;
  return {
    loggedInUser,
    session,
    users
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getUsers, getUserSession, getUser, newMessage, uploadFile, sendFlashMessage}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);