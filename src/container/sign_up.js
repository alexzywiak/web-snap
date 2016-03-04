import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import {signUp} from '../action/index';


class SignUp extends Component{

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data){
    this.props.logIn(data)
    .then(result => {
     const sessionToken = result.payload.data.sessionToken;
     window.localStorage.setItem('session-token', result);
   });
  }

  render(){
    console.log('container', this.props.loggedInUser)
    const {fields: {username, email, password}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
      <label>Username</label>
      <input type="text" {...username}/>
      <label>Email</label>
      <input type="text" {...email}/>
      <label>Password</label>
      <input type="text" {...password}/>
      <button type="submit">Sign Up</button>
      </form>
      );
  }
}

const mapStateToProps = ({loggedInUser}) => {
  return {
    loggedInUser
  }
}

export default reduxForm({
  form: 'SignUpForm',
  fields: ['username', 'email', 'password']
}, mapStateToProps, {signUp})(SignUp);
