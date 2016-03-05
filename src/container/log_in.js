import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {logIn} from '../action/index';
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
  return bindActionCreators({logIn}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
