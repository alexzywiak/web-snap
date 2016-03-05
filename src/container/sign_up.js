import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {signUp, sendFlashMessage} from '../action/index';
import LoginForm from '../component/login_form';

class SignUp extends Component{

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data){
    this.props.signUp(data)
    .then(result => {
      const sessionToken = result.payload.data.sessionToken;
      window.localStorage.setItem('session-token', sessionToken);
      this.props.sendFlashMessage({
        className:'alert-success',
        message: `You\'re all signed up as ${this.props.loggedInUser.username}!`
      });
      browserHistory.push('/messages');
    });
  }

  render(){

    return (
        <LoginForm
        title="Sign Up"
        action="signUp"
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
  return bindActionCreators({signUp, sendFlashMessage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
