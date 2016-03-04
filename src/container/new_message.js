import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import {getUsers, newMessage, getUserSession} from '../action/index';

class NewMessage extends Component{

  componentWillMount(){
    this.props.getUsers();
    if(!this.props.loggedInUser){
      if(window.localStorage.getItem('session-id')){
        
      } else {
        browserHistory.push('/login');
      }
    }
  }

  renderUsers(){
    return this.props.users.map( user => {
      return (
        <li key={user.username}>
          <div>{user.username}</div>
          <div>{user.email}</div>
        </li>
      );
    });
  }

  render(){
    console.log(this.props);
    return (
      <div>
        <ul>{this.renderUsers()}</ul>
        <button onClick={() => browserHistory.push('/login')}></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const {loggedInUser, users} = state;
  return {
    loggedInUser,
    users
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getUsers, getUserSession}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessage);