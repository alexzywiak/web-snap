import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {signUp} from '../action/index';
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
  return bindActionCreators({signUp}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
