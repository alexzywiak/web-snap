import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {logIn, sendFlashMessage} from '../action/index';
import LoginForm from '../component/login_form';

class LogIn extends Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data){
    this.props.logIn(data)
    .then(result => {
      const sessionToken = result.payload.data.sessionToken;
      window.localStorage.setItem('session-token', sessionToken);
      this.props.sendFlashMessage({
        className:'alert-success',
        message: `You\'re logged in as ${this.props.loggedInUser.username}!`
      });
      browserHistory.push('/messages');
    });
  }

  render(){

    return (
        <LoginForm
        title="Log In"
        action="logIn"
        handleSubmit={this.handleSubmit}
        />
    );
  }
}

const mapStateToProps = ({loggedInUser}) => {
  return {
    loggedInUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logIn, sendFlashMessage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
