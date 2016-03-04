import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import {signUp} from '../action/index';


class SignUp extends Component{

  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data){
    console.log('container', data);
    this.props.signUp(data);
  }

  render(){

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

export default reduxForm({
  form: 'SignUpForm',
  fields: ['username', 'email', 'password']
}, null, {signUp})(SignUp);

// class SignUp extends Component(){

//   constructor(props){
//     super(props);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onSubmit(data){
//     console.log(data);
//     this.props.signUp(data)
//       .then( result => {
//         console.log(result);
//       });
//   }


// }