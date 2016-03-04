import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import {logIn} from '../action/index';


class LogIn extends Component{

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data){
    this.props.logIn(data)
      .then(result => {
        console.log('result', result);
      });
  }

  render(){
    console.log('container', this.props.loggedInUser)
    const {fields: {username, password}, handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <label>Username</label>
        <input type="text" {...username}/>
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
  form: 'LogInForm',
  fields: ['username', 'password']
}, mapStateToProps, {logIn})(LogIn);
