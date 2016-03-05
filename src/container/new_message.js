import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import { authorize } from '../auth';
import {getUsers, getUser, newMessage, getUserSession, uploadFile} from '../action/index';

import NewMessageForm from '../component/new_message_form';

class NewMessage extends Component{

  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    this.props.getUsers();
    authorize(this.props, '/login');
  }

  handleSubmit(data){
    console.log(data);
    this.props.uploadFile(data.filepath)
      .then(resp => {
        console.log(resp);
        this.props.newMessage(data)
        .then(resp => {
          console.log(resp);
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
      <h3>{this.props.loggedInUser.username}</h3>
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
  return bindActionCreators({getUsers, getUserSession, getUser, newMessage, uploadFile}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);