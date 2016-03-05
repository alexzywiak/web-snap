import React, {Component} from 'react';

class LoginForm extends Component {
  constructor(props){
    super(props);

    this.state = {username: '', password: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(stateProp, value){
    let obj = {};
    obj[stateProp] = value;
    this.setState(obj);
  }

  onSubmit(evt){
    evt.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render(){
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.onSubmit}>
          <label>Username</label>
          <input 
          type="text"
          value = {this.state.username}
          onChange={evt => this.onInputChange('username', evt.target.value)}/>
          
          { this.props.action === 'signUp' ? (
            <span>
              <label>Email</label>
              <input 
              type="text"
              value = {this.state.email}
              onChange={evt => this.onInputChange('email', evt.target.value)}/>
            </span>
          ): null }
        
          <label>Password</label>
          <input 
          type="text"
          value = {this.state.password}
          onChange={evt => this.onInputChange('password', evt.target.value)}/>
          <button type="submit">{this.props.title}</button>
        </form>
      </div>
    );
  }
};

export default LoginForm;